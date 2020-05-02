describe('Home page Test', () => {

  describe('when typing a todo item', () => {

    it('the input filed allows inserting an item name', () => {
      cy.visit('http://localhost:5000')

      cy.get('#item')
        .type('A fake todo item')
        .should('have.value', 'A fake todo item')
    })

    describe('then clicking on the Add button', () => {

      before(() => {
        cy.get('[data-cy="add-todo"]').click()
      })
      it('the item is added to the items list', () => {
        cy.get('ul')
          .should('contain', 'A fake todo item')
      })

      it('the added item should contain a Delete button', () => {

        cy.get('ul li:first-child').contains('button', 'Delete')

      })

      describe('then clicking on the Delete button', () => {

        before(() => {
          cy.get('ul li:first-child button').click()
        })

        it('the element is removed from the list', () => {
          cy.get('ul')
            .should('not.contain', 'A fake todo item')
        })
      })

    })

  })

})