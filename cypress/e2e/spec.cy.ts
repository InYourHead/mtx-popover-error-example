describe('template spec', () => {
  it('Can open browser with sample application', () => {
    cy.visit('http://localhost:4200')
  })

  it('Can click button with popover without exception', () => {
    cy.visit('http://localhost:4200');

    cy.get('[id=exampleButtonSpan]').click();
  })
})
