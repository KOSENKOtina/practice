class LoginPage {
    constructor() {
        this.emailInputFieldLocator = 'input[name=\'username\']';
        this.passwordInputFieldLocator = 'input[type=\'password\']';
        this.loginBtnLocator = 'button=Login';
    }

    get emailInputField() {
        return $(this.emailInputFieldLocator);
    }

    get passwordInputField() {
        return $(this.passwordInputFieldLocator);
    }

    get loginBtn() {
        return $(this.loginBtnLocator);
    }

    setEmailValue(email) {
        this.emailInputField.waitForDisplayed();
        this.emailInputField.clearValue();
        this.emailInputField.setValue(email);
    }

    setPasswordValue(password) {
        this.passwordInputField.waitForDisplayed();
        this.passwordInputField.clearValue();
        this.passwordInputField.setValue(password);
    }
}

module.exports = new LoginPage();