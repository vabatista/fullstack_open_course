describe('Note app', function() {

  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    const user = {
      name: 'Vitor A. Batista',
      username: 'vabatista',
      password: '123456'
    }
    cy.request('POST', 'http://localhost:3001/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('blog')
  })

  it('login form can be opened', function() {
    cy.contains('log in').click()
    cy.get('#username').type('vabatista')
    cy.get('#password').type('123456')
    cy.get('#login-button').click()

    cy.contains('Vitor A. Batista logged in')
  })

  it('login fails with wrong password', function() {
    cy.contains('log in').click()
    cy.get('#username').type('vabatista')
    cy.get('#password').type('blabla')
    cy.get('#login-button').click()

    cy.get('.error').contains('Wrong credentials')
		cy.get('html').should('not.contain', 'Vitor A. Batista logged in')
  })

  describe('when logged in', function() {
    beforeEach(function() {
      cy.contains('log in').click()
      cy.get('#username').type('vabatista')
      cy.get('#password').type('123456')
      cy.get('#login-button').click() 
/* 			cy.request('POST', 'http://localhost:3001/api/login', {
				username: 'vabatista', password: '123456'
			}).then(response => {
				localStorage.setItem('loggedBlogApp', JSON.stringify(response.body))
				cy.visit('http://localhost:3000')
			})		
 */			
		})

    it('a new blog post can be created', function() {
      cy.contains('New Blog Entry').click()
      cy.get('#title').type('a new blog title')
			cy.get('#author').type('a new blog author')
			cy.get('#url').type('http://www.newurl.com.br')
      cy.get('#save-button').click()
      // cy.contains('a note created by cypress')
    })
  })

})