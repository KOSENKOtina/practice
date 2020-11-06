const CredsPage = require('../pageobjects/CredsPage');
const HomePage = require('../pageobjects/HomePage');
const LoginPage = require('../pageobjects/LoginPage');
const Account = require('../pageobjects/Account');
const BookOptions = require('../pageobjects/BookOptions');
const PersonalDetails = require('../pageobjects/PersonalDetails')


const lazyEmail = 'user@phptravels.com';
const lazyPassword = 'demouser';

describe("  ", () => {
    //let email, password;
    xdescribe('On page with credentials', () => {
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
            LoginPage.setEmailValue(lazyEmail);
        });
        it('should set email field', () => {
            LoginPage.setPasswordValue(lazyPassword);
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
        it('should press search button', () => {
            browser.pause(500); //todo find a solution w/o pause
            HomePage.clickSearch();
        });
    });
    describe('On results page', () => {
        let price;
        let deposit;
        it('should set correct date', () => {
            BookOptions.date.waitForDisplayed();
            BookOptions.date.setValue('06/05/2021');
            BookOptions.date.click({x: 0, y: 40});//clicks change date button, todo refactor
        });
        it('should set correct number of adults', () => {
            BookOptions.adultsAmount.click();
            BookOptions.adultsAmount.selectByVisibleText("2");
            // expect(actualAdultsAmount).toEqual('2', 'incorrect adults number');
        });
        it('should remember the price and deposit', () => {
            price = BookOptions.totalCost.getText();
            deposit = BookOptions.deposit.getText();
            console.log('deposit ' + deposit + ' price ' + price);
        });
        it('should click book now button', () => {
            BookOptions.bookNowBtn.scrollIntoView();
            BookOptions.bookNowBtn.click();
        });
        it('should have correct First and Last name', () => {
            const firstName = PersonalDetails.firstName.getText();
            const lastName = PersonalDetails.lastName.getText();
            expect(firstName.toLowerCase()).toEqual(login, 'incorrect first name');
        });
    });

})