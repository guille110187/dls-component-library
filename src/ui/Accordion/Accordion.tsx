import { useId, useState } from 'react'
import type { ReactNode } from 'react'
import './Accordion.css'

export type AccordionItem = {
  id: string
  title: ReactNode
  content: ReactNode
}

export type AccordionProps = {
  items: AccordionItem[]
  shouldAllowMultipleExpanded?: boolean
  defaultExpandedIds?: string[]
  className?: string
}

const getInitialExpandedIds = (
  items: AccordionItem[],
  defaultExpandedIds: string[],
  shouldAllowMultipleExpanded: boolean,
) => {
  const itemIds = new Set(items.map((item) => item.id))
  const validExpandedIds = defaultExpandedIds.filter((id) => itemIds.has(id))

  return shouldAllowMultipleExpanded ? validExpandedIds : validExpandedIds.slice(0, 1)
}

export function Accordion({
  items,
  shouldAllowMultipleExpanded = true,
  defaultExpandedIds = [],
  className,
}: AccordionProps) {
  const accordionId = useId().replaceAll(':', '')
  const [expandedIds, setExpandedIds] = useState<string[]>(() =>
    getInitialExpandedIds(items, defaultExpandedIds, shouldAllowMultipleExpanded),
  )

  const toggleItem = (itemId: string) => {
    setExpandedIds((currentExpandedIds) => {
      const isExpanded = currentExpandedIds.includes(itemId)

      if (isExpanded) {
        return currentExpandedIds.filter((expandedId) => expandedId !== itemId)
      }

      if (!shouldAllowMultipleExpanded) {
        return [itemId]
      }

      return [...currentExpandedIds, itemId]
    })
  }

  const rootClassName = ['accordion', className].filter(Boolean).join(' ')

  return (
    <div className={rootClassName}>
      {items.map((item, index) => {
        const isExpanded = expandedIds.includes(item.id)
        const headerId = `${accordionId}-accordion-header-${index}`
        const panelId = `${accordionId}-accordion-panel-${index}`

        return (
          <div className="accordion__item" key={item.id}>
            <h3 className="accordion__heading">
              <button
                aria-controls={panelId}
                aria-expanded={isExpanded}
                className="accordion__trigger"
                id={headerId}
                onClick={() => toggleItem(item.id)}
                type="button"
              >
                <span>{item.title}</span>
                <span aria-hidden="true" className="accordion__indicator">
                  {isExpanded ? '-' : '+'}
                </span>
              </button>
            </h3>
            <div
              aria-labelledby={headerId}
              className="accordion__panel"
              hidden={!isExpanded}
              id={panelId}
              role="region"
            >
              {isExpanded ? <div className="accordion__content">{item.content}</div> : null}
            </div>
          </div>
        )
      })}
    </div>
  )
}
