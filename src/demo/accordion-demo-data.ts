import type { AccordionItem } from '../ui/Accordion'

export const accordionDemoItems: AccordionItem[] = [
  {
    id: 'overview',
    title: 'Component purpose',
    content:
      'The Accordion groups related content behind headings so a page can stay compact while details remain easy to reach.',
  },
  {
    id: 'accessibility',
    title: 'Accessibility behavior',
    content:
      'Each trigger is a button with aria-expanded and aria-controls, and each panel is a named region linked back to its trigger.',
  },
  {
    id: 'testing',
    title: 'Testing strategy',
    content:
      'The unit tests cover collapsed state, toggling, multi-panel behavior, single-panel behavior, and ARIA relationships.',
  },
]
