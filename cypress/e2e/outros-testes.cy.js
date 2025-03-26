describe('Testes na pagina principal', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    it('deve clicar no botão ‘Ver pets disponíveis para adoção”', () => {
        cy.title().should('eq', 'AdoPet');
        cy.contains('a', 'Ver pets disponíveis para adoção').click();
    });

    describe('Teste quem ama adota', () => {
        beforeEach(() => {
            cy.visit('https://adopet-frontend-cypress.vercel.app/');
        })

        it('Verifica mensagem de texto', () => {
            cy.contains('p', 'Quem ama adota!').should('be.visible')
        })

        it('Verifica mensagem de texto', () => {
            cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible')
        })
    });

    describe('Fluxo de Login', () => {
        beforeEach(() => {
            cy.visit('https://adopet-frontend-cypress.vercel.app/');
        })

        it('Verifica mensagem de texto', () => {
            cy.get('.header__message').click();
            cy.get('[data-test="input-loginEmail"]').type('Pedro@email.com');
            cy.get('[data-test="input-loginPassword"]').type('Senha123');
            cy.get('[data-test="submit-button"]').click();

        })
    });
});