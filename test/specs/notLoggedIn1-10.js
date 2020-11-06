const HomePage = require('../pageobjects/HomePage');
const BookOptions = require('../pageobjects/BookOptions');
const PersonalDetails = require('../pageobjects/PersonalDetails')

describe("  ", () => {


    describe('On home page', () => {
        it('should select Tours tab', () => {
            HomePage.navigate();
            browser.maximizeWindow();
            HomePage.getTabByName('tours').click();
        });

        it('should set a distanation', () => {
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
        it('should set correct First name', () => {
            const firstName = PersonalDetails.firstName.setValue('TestFirstName1');
            expect(firstName).toBeDefined();
        });

        it('should set correct Last name', () => {
            const lastName = PersonalDetails.lastName.setValue('TestLastName1');
            expect(lastName).toBeDefined();
        });
        it('should set correct email', () => {
            const firstName = PersonalDetails.email.setValue('user@phptravels.com');
            expect(firstName).toBeDefined();
        });
        it('should set correct confirm email', () => {
            const firstName = PersonalDetails.confirmemail.setValue('user@phptravels.com');
            expect(firstName).toBeDefined();
        });
        it('should click confirm button', () => {
            const confirmBookingBtn = PersonalDetails.confirmBtn;
            confirmBookingBtn.click();
        });
    });
})