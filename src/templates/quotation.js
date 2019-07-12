import React from 'react'

export const QuotationTemplate = props => {
  return (
    <section className="section">
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </section>
  )
}

export default QuotationTemplate

