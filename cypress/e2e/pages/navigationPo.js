export class NavigationPo {

    goToPage() {
        cy.visit('https://www.saucedemo.com/')
    }

    loginTo(userName, pwd) {
        cy.get('#user-name').clear().type(userName)
        cy.get('#password').clear().type(pwd)
    }

    clickLogin(){
        cy.get('#login-button').click()
    }

    verifConnected(){
		cy.url().then((monUrl) => {
			expect(monUrl).to.equals('https://www.saucedemo.com/inventory.html')
		})
    }
}
