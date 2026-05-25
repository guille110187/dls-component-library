# DLS Component Library

This repository is a small component-library foundation for the DLS take-home
assessment. The first implemented component is a reusable React Accordion with a
demo page and unit tests based on the recovered assessment tests.

## Tech Choices

- React + TypeScript: typed component APIs with a familiar UI model.
- Vite: quick local development and simple production builds.
- Vitest + React Testing Library: fast component tests focused on user-visible behavior.
- user-event: realistic click interactions in tests.
- jest-dom: readable DOM assertions such as `toBeVisible`.
- jsdom: browser-like test environment for React Testing Library.
- ESLint + Prettier: lightweight code quality and formatting support.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run test
npm run test:run
npm run format
npm run format:check
```

- `dev`: starts the Vite dev server.
- `build`: type-checks and builds the app.
- `lint`: runs ESLint.
- `test`: starts Vitest in watch mode.
- `test:run`: runs Vitest once.
- `format`: formats files with Prettier.
- `format:check`: checks formatting without writing changes.

## Running Locally

Install dependencies and start the demo app:

```bash
npm install
npm run dev
```

Run the test suite:

```bash
npm run test:run
```

## Accordion API

```tsx
export type AccordionItem = {
  id: string
  title: React.ReactNode
  content: React.ReactNode
}

export type AccordionProps = {
  items: AccordionItem[]
  shouldAllowMultipleExpanded?: boolean
  defaultExpandedIds?: string[]
  className?: string
}
```

`shouldAllowMultipleExpanded` defaults to `true`, so multiple panels can be open
at the same time. When set to `false`, opening one panel closes the previously
expanded panel. `defaultExpandedIds` provides the initial uncontrolled expanded
state. When it is omitted, all panels start collapsed.

Example:

```tsx
<Accordion
  items={[
    { id: 'one', title: 'Panel one', content: 'Content for panel one' },
    { id: 'two', title: 'Panel two', content: 'Content for panel two' },
  ]}
/>
```

## Accessibility Approach

Each accordion trigger is a native `button` with `type="button"`,
`aria-expanded`, and `aria-controls`. Each content panel is always rendered as a
`role="region"` element with an `id`, `aria-labelledby`, and a `hidden` state
when collapsed. Collapsed panel content is not mounted, which keeps
`queryByText(...)` expectations aligned with the recovered tests while retaining
the region elements for accessibility assertions. Focus styling is visible via
`:focus-visible`.

## Assessment Notes

This implementation intentionally stays focused for the 2.5-hour assessment timebox. It
sets up a maintainable folder structure under `src/ui`, demonstrates the
component in `App.tsx`, and covers the behavior requested in the recovered tests
without adding Storybook, CI, publishing, complex tokens, animations, or
compound components.

## Future Improvements

- Storybook for component documentation and visual review.
- Design tokens or CSS variables once the design language is clearer.
- Controlled component mode for consumers that need external state management.
- Add test coverage for `defaultExpandedIds` and invalid default ids.
- Keyboard arrow navigation and roving focus for richer keyboard ergonomics.
- Add interaction tests for keyboard behavior if advanced keyboard navigation is introduced.
- Animation support for panel transitions.
- CI validation for lint, test, and build checks.
- Package publishing setup when the library is ready for reuse.