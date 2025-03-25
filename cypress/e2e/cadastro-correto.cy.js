describe('Pagina de Cadastro', () => {
  it('Deve preencher os campos do formulario corretamente para cadastrar novo usuario', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Ana de Jesus');
    cy.get('[data-test="input-email"]').type('ana@email.com');
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  })
})

describe('atividade aula 1', () => {
  it('visita a página de principal do AdoPet e clica no botão "Ver pets disponíveis para adoção"', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Ver pets disponíveis para adoção').click();
  })
})

describe('atividade aula 1 -B', () => {
  it('Visite a página de principal do AdoPet e teste os botões header', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.header__home').click();
    cy.get('.header__message').click();
  })
})

describe('atividade aula 1 -c', () => {
  it('visita a pagina de /login do Adopet', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    cy.get('input[name="email"]').type('pedroj75@email.com');
    cy.get('input[name="password"]').type('Senha123');
    cy.contains('button', 'Entrar').click();
  })
})

describe('atividade aula 1 -d', () => {
  it('visita a pagina de /home do Adopet e clica no botao "Falar com o Responsavel"', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    cy.get('.header__message').click();
  })
})
