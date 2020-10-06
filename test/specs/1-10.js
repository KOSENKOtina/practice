const credsPage = require('../pageobjects/CredsPage');


describe("  ", () => {
    let email, password;
    const credsPage = new credsPage();
    it("should take credentials", () => {
        credsPage.navigate();
        const locator = $('.col-md-8 div.row');
        const textPromise = locator.getText();
        const firstcredsArr = textPromise.split(/[ | \n]/);
        email = firstcredsArr[1];
        password = firstcredsArr[3];
        browser.url('https://www.phptravels.net/');
        const loginBtn = $('.dropdown-login a.dropdown-item.active');
        const loginlink = loginBtn.getAttribute('href')
        browser.url(loginlink);
        const emailField = $('input[type=\'email\']');
        emailField.clearValue();
        emailField.setValue(email);
        const passwordField = $('input[type=\'password\']');
        passwordField.clearValue();
        passwordField.setValue(password);
        const loginButton = $('button=Login');
        loginButton.click();
        //console.log('wait')


    });

})