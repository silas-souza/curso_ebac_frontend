/// <reference types="cypress" />

describe ('Agenda de contatos - inclusão', () => {
     it('Deve adiciona um novo contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
         cy.wait(1000);
         
        
        cy.get('input[placeholder="Nome"]').type('Silas Souza')
        
        cy.get('input[placeholder="Telefone"]').first().click().type('11 1234-56789')
        
        cy.get('input[placeholder="E-mail"]').first().click().type('Silas.Souza@teste.com')
         

        cy.contains('button', 'Adicionar').click();
        
        
        cy.contains('Silas Souza').should('exist');
       
        cy.contains('11 1234-56789').should('exist');
       
        cy.contains('Silas.Souza@teste.com').should('exist'); 
         
     })
     describe('Agenda de Contatos - Inclusão', () => {
    it('Deve adicionar um novo contato', () => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
       cy.wait(1000);
       
      
      cy.get('input[placeholder="Nome"]').type('lucas');
       
      cy.get('input[placeholder="Telefone"]').type('123456789');
      
      cy.get('input[placeholder="E-mail"]').type('lucas@example.com');
     
      
      cy.contains('button', 'Adicionar').click();
       
      
      cy.contains('lucas').should('exist');
      
      cy.contains('123456789').should('exist');
       
      cy.contains('lucas@example.com').should('exist');
       
    });
    describe('Agenda de Contatos - Inclusão', () => {
        it('Deve adicionar um novo contato', () => {
          cy.visit('https://agenda-contatos-react.vercel.app/');
           cy.wait(1000);
           
          cy.get('input[placeholder="Nome"]').type('maria');
         
          cy.get('input[placeholder="Telefone"]').type('123456789');
         
          cy.get('input[placeholder="E-mail"]').type('maria@example.com');
          
          cy.contains('button', 'Adicionar').click();
          
          
          cy.contains('maria').should('exist');
         
          cy.contains('123456789').should('exist');
          
          cy.contains('maria@example.com').should('exist'); 
        });
      });
  });
  describe('Agenda de Contatos - Inclusão', () => {
    it('Deve adicionar um novo contato', () => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
       cy.wait(1000);
      
      
      cy.get('input[placeholder="Nome"]').type('joão');
        
      cy.get('input[placeholder="Telefone"]').type('123456789');
     
      cy.get('input[placeholder="E-mail"]').type('joao@example.com');
       
      
      cy.contains('button', 'Adicionar').click();
      
      
      cy.contains('joão').should('exist');
      
      cy.contains('123456789').should('exist');
      
      cy.contains('joao@example.com').should('exist');
     
    });
  });

    it("Deve alterar a informação da lista", () => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
         cy.wait(1000);
      


        cy.get(':nth-child(3) > .sc-gueYoa > .edit').click();
         
        cy.get('input[placeholder="Nome"]').clear().type('clóvis');
       
        cy.get('input[placeholder="E-mail"]').clear().type('clovis@example.com');
        
        cy.get('input[placeholder="Telefone"]').clear().type('1234567890');
        
        cy.contains('button', 'Salvar').click();

  });


      
})

describe('Agenda de Contatos - Remoção', () => {
    it('Deve remover o teceiro contato na lista', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
         cy.wait(1000);
        

 
        cy.on('window:confirm', () => true);
         

     
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click();
         

         cy.wait(1000);
        cy.contains('clóvis').should('not.exist');
        
    });
});
   
    