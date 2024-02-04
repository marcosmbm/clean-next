describe('Entrar com o github', () => {
    it('Usuário deve poder navegar para a página de repositórios', () => {
        cy.visit('http://localhost:3000');
        cy.get('input[name="username"]').type('marcosmbm');
        cy.get('button[type="submit"]').click()

        cy.url().should('include', '/repos/marcosmbm');
    });
});