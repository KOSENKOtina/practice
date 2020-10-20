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
            LoginPage.loginBtn.waitForDisplayed();
            LoginPage.loginBtn.click();
        });
    });
    describe('On account page', () => {
        it('should click on home page', () => {
            Account.Account.homeBtn.waitForDisplayed();
            browser.pause(1000);
            Account.Account.homeBtn.click();
        });
    });
    describe('On home page', () => {
        it('should select Tours tab', () => {
            browser.maximizeWindow();
            HomePage.getTabByName('tours').click();
        });

        it('should set a distanation', () => {
            //browser.pause(500);
            HomePage.setDestination('Big Bus Tour of Dubai');
        });

        it('should set a tour type', () => {
            HomePage.setTourType();
        });

        it('should set correct date', () => {
            HomePage.setDate('06/05/2021');
        });
        it('should add 1 adult to a trip', () => {
            HomePage.addAdultByTab();
        });
        it('should press search button', ()=> {
            HomePage.clickSearch();
        });
    });
    describe('On results page', () => {
       it('should specify max amount of days')
    });

})