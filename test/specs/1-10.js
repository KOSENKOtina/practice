const CredsPage = require('../pageobjects/CredsPage');
const HomePage = require('../pageobjects/HomePage');
const LoginPage = require('../pageobjects/LoginPage');
const Account = require('../pageobjects/Account');

describe("  ", () => {
    let email, password;
    describe('On page with credentials', () => {
        before(() => {
            CredsPage.navigate();
            browser.pause(2000);
        })
        it("should take email", () => {
            email = CredsPage.email;
            expect(email.length > 0).toBe(true, 'email is empty');
        });
        it('should take password', () => {
            password = CredsPage.password;
            expect(password.length > 0).toBe(true, 'password is empty');
        });
    });
    describe('From Home page', () => {
        it('should navigate to login page', () => {
            HomePage.navigate();
            const loginlink = HomePage.getLoginLink();
            browser.url(loginlink);
            LoginPage.emailInputField.waitForDisplayed();
        });
    });
    describe("On login page", () => {
        it('should set email field', () => {
            LoginPage.setEmailValue(email);
        });
        it('should set email field', () => {
            LoginPage.setPasswordValue(password);
        });
        it('should click login page', () => {
            LoginPage.loginBtn.click();
        });
    });
    describe('On account page', () => {
        it('should click on home page', () => {
            Account.homeBtn.click();
        });
    });
    describe('On home page', () => {
        it('should select Tours tab', () => {
            HomePage.getTabByName('tours');
        });
        it('should add 1 adult to a trip', () => {
            HomePage.addAdultByTab('tours');
        })
    })


//     const toursTab = $('ul li a[data-name=\'tours\']');
//     toursTab.waitForDisplayed();
//     toursTab.click();
//     const addAdultsBtn = $('#tours .bootstrap-touchspin-up');
//     addAdultsBtn.click();
//     addAdultsBtn.click();
//
//
//     const boatType = $('#boattype_chosen a.chosen-single');
//     boatType.click();
//     browser.pause(2000);
//     const ferryOption = $('li.active-result=Ferry');
//     ferryOption.click();
//     browser.pause(2000);
// });

})