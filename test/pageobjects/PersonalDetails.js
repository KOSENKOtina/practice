class PersonalDetails {
    constructor() {
        this.firstNameLocator = 'input[name="firstname"]';
        this.lastNameLocator = 'input[name="lastname"]';
        this.emailLocator = 'input[name="email"]';
        this.confirmEmailLocator = 'input[name="confirmemail"]';
        this.confirmBtnLocator = '.completebook';
    }
    get firstName() {
        return $(this.firstNameLocator);
    }
    get lastName() {
        return $(this.lastNameLocator);
    }
    get email() {
        return $(this.emailLocator);
    }
    get confirmemail() {
        return $(this.confirmEmailLocator);
    }
    get confirmBtn() {
        return $(this.confirmBtnLocator);
    }
}
module.exports = new PersonalDetails();