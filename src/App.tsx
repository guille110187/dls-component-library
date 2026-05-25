import { accordionDemoItems } from './demo/accordion-demo-data'
import { Accordion } from './ui/Accordion'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="eyebrow">DLS component library foundation</p>
        <h1>Accordion</h1>
        <p>
          A small, reusable React Accordion component built with accessibility and
          testability in mind.
        </p>
      </header>

      <section className="demo-section" aria-labelledby="default-demo-heading">
        <div className="demo-section__heading">
          <h2 id="default-demo-heading">Default mode</h2>
          <p>Multiple panels can be expanded at the same time.</p>
        </div>
        <Accordion items={accordionDemoItems} />
      </section>

      <section className="demo-section" aria-labelledby="single-demo-heading">
        <div className="demo-section__heading">
          <h2 id="single-demo-heading">Single-panel mode</h2>
          <p>Opening a panel closes the previously expanded panel.</p>
        </div>
        <Accordion items={accordionDemoItems} shouldAllowMultipleExpanded={false} />
      </section>
    </main>
  )
}

export default App
