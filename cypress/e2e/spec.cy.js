describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Pedro');
    cy.get('input[name="email"]').type('pedroj75@email.com');
    cy.get('input[name="password"]').type('Senha123');
    cy.get('input[name="confirm_password"]').type('Senha123');
    cy.contains('button', 'Cadastrar').click();
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
