describe('Google Search', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com');
        cy.get('#W0wltc > .QS5gu').click();
        cy.get('#APjFqb').type('prowly{enter}');
    });

    it('Find "prowly" without date filter', () => {
        cy.get('#search').should('contain', 'prowly');
    });

    it('Find "prowly" from the last 24 hours', () => {
        this.SelectTimeRange('Past 24 hours');
        cy.get('#search').should('contain', 'prowly');
    });

    it('Find "prowly" from the last year', () => {
        this.SelectTimeRange('Past Year');
        cy.get('#search').should('contain', 'prowly');
    });
});

function SelectTimeRange(timeRange: string){
    cy.get('#hdtb-tls').contains('Tools').click();
    cy.get('#tn_ZCiZZ9HwBeqhwPAP26f78AM_1 > span:nth-child(2) > g-popup:nth-child(1) > div:nth-child(1) > div:nth-child(1)')
    .contains('Any time').click();
    cy.get('a').contains(timeRange).click();
}