
it('finds 1 result when auto-searching for "screwdriver"', () => {
  cy.visit('/');
  cy.contains('.search__head', 'Search Items');
  cy.get('.search__input').find('input').type('screw');

  cy.contains('.search__results', 'Number of items retrieved: 1');
  cy.get('.search__results').find('tr').should('have.length', 1);
  cy.get('.search__results tr td').first().contains('Screwdriver');
});

it('finds 3 results for a "empty" search', () => {
  cy.visit('/');
  cy.contains('.search__head', 'Search Items');
  cy.get('button').click();

  cy.contains('.search__results', 'Number of items retrieved: 4');
  cy.get('.search__results').find('tr').should('have.length', 4);
});

