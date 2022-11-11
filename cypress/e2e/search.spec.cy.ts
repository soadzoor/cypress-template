const keywordToSearchFor = Cypress.env('keywordToSearchFor');

describe('My automated tests', () => {
	it('Visits a site', () => {
		cy.visit('#');
		cy.get('#search_form_input_homepage').type(`${keywordToSearchFor}{enter}`).should('contain', keywordToSearchFor);
	})
})