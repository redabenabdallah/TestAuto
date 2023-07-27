import {PageLogin} from "../../webElements/pageLogin";

export class NavigationPo {

    pageLogin = new PageLogin()

    goToPage(urlPge) {
        cy.visit(urlPge)
    }

    loginTo(userName, pwd) {
        cy.get(this.pageLogin.loginInput).clear().type(userName)
        cy.get(this.pageLogin.pwdInput).clear().type(pwd)
    }

    clickLogin(){
        cy.get(this.pageLogin.loginBtn).click()
    }

    verifConnected(){
		cy.url().then((monUrl) => {
			expect(monUrl).to.equals('https://www.saucedemo.com/inventory.html')
		})
    }
}
