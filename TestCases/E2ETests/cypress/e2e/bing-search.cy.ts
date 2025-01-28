describe('Bing Search', () => {
    beforeEach(() => {
        cy.visit('https://www.bing.com');
        cy.get('.sb_form_ic').type('semrush');
        cy.get('#search_icon').click();
    });
    let keyword = "semrush"
    it('should find "semrush" in all results', () => {
        cy.get('#b_results').should('contain', keyword).and('be.visible');
    });

    it('should find "semrush" in video results', () => {
        cy.get('#b-scopeListItem-video').contains('Videos').click();
        checkResultsContainKeyword('.b_algo', keyword);
    });

    it('should find "semrush" in news results', () => {
        cy.contains('#b-scopeListItem-images').click();
        checkResultsContainKeyword('.news-card', keyword)
    });
});

function checkResultsContainKeyword(selector: string, keyword: string){
    cy.get(selector).each(($el) => {
        cy.wrap($el).contains(keyword).should('be.visible');
    });
}