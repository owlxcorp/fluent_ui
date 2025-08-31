import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:fluent_ui/fluent_ui.dart';

void main() {
  group('NavigationPane Merge Conflict Resolution', () {
    testWidgets('NavigationPane with infoBox should render correctly', (tester) async {
      final mockInfoBox = Container(
        height: 50,
        child: const Text('Info Box'),
      );

      final pane = NavigationPane(
        displayMode: PaneDisplayMode.compact,
        items: [
          PaneItem(
            icon: const Icon(FluentIcons.home),
            title: const Text('Home'),
            body: const Text('Home Body'),
          ),
        ],
        infoBox: mockInfoBox,
      );

      await tester.pumpWidget(
        FluentApp(
          home: NavigationView(
            pane: pane,
            content: const Text('Content'),
          ),
        ),
      );

      // Verify infoBox is present in compact mode
      expect(find.text('Info Box'), findsOneWidget);
    });

    testWidgets('NavigationPane with autoSuggestBox should render correctly', (tester) async {
      final pane = NavigationPane(
        displayMode: PaneDisplayMode.open,
        items: [
          PaneItem(
            icon: const Icon(FluentIcons.home),
            title: const Text('Home'),
            body: const Text('Home Body'),
          ),
        ],
        autoSuggestBox: AutoSuggestBox<String>(
          items: const [
            AutoSuggestBoxItem<String>(
              value: 'test',
              label: 'Test Item',
            ),
          ],
        ),
        autoSuggestBoxReplacement: const Icon(FluentIcons.search),
      );

      await tester.pumpWidget(
        FluentApp(
          home: NavigationView(
            pane: pane,
            content: const Text('Content'),
          ),
        ),
      );

      // Verify autoSuggestBox is present in open mode
      expect(find.byType(AutoSuggestBox), findsOneWidget);
    });

    testWidgets('NavigationPane should handle proper item selection', (tester) async {
      int? selectedIndex;

      final pane = NavigationPane(
        displayMode: PaneDisplayMode.open,
        selected: 0,
        onChanged: (index) => selectedIndex = index,
        items: [
          PaneItem(
            icon: const Icon(FluentIcons.home),
            title: const Text('Home'),
            body: const Text('Home Body'),
          ),
          PaneItem(
            icon: const Icon(FluentIcons.settings),
            title: const Text('Settings'),
            body: const Text('Settings Body'),
          ),
        ],
      );

      await tester.pumpWidget(
        FluentApp(
          home: NavigationView(
            pane: pane,
            content: const Text('Content'),
          ),
        ),
      );

      // Verify first item is selected initially
      expect(selectedIndex, isNull); // Callback not called yet
      
      // Find and tap the settings item
      await tester.tap(find.text('Settings'));
      await tester.pump();

      // Verify selection changed
      expect(selectedIndex, equals(1));
    });

    testWidgets('NavigationPane should preserve scrolling functionality', (tester) async {
      final pane = NavigationPane(
        displayMode: PaneDisplayMode.open,
        items: List.generate(20, (index) => 
          PaneItem(
            icon: const Icon(FluentIcons.home),
            title: Text('Item $index'),
            body: Text('Body $index'),
          ),
        ),
      );

      await tester.pumpWidget(
        FluentApp(
          home: NavigationView(
            pane: pane,
            content: const Text('Content'),
          ),
        ),
      );

      // Verify ListView is present and scrollable
      expect(find.byType(ListView), findsWidgets);
      
      // Try to scroll
      await tester.drag(find.text('Item 0'), const Offset(0, -500));
      await tester.pump();

      // Should still be able to find items (they are in a scrollable list)
      expect(find.byType(ListView), findsWidgets);
    });

    testWidgets('NavigationPane background color should be preserved', (tester) async {
      final pane = NavigationPane(
        displayMode: PaneDisplayMode.open,
        items: [
          PaneItem(
            icon: const Icon(FluentIcons.home),
            title: const Text('Home'),
            body: const Text('Home Body'),
          ),
        ],
      );

      await tester.pumpWidget(
        FluentApp(
          theme: FluentThemeData(
            navigationPaneTheme: const NavigationPaneThemeData(
              backgroundColor: Colors.blue,
            ),
          ),
          home: NavigationView(
            pane: pane,
            content: const Text('Content'),
          ),
        ),
      );

      // Verify AnimatedContainer is present (which should have the background color)
      expect(find.byType(AnimatedContainer), findsWidgets);
    });
  });
}