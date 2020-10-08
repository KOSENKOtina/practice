class CredsPage {
    constructor() {
        this.url = 'https://phptravels.com/demo'
    }

    navigate() {
        browser.url(this.url);
    };

    get email() {
        const locator = $('.col-md-8 div.row');
        locator.waitForDisplayed();
        const textPromise = locator.getText();
        const firstcredsArr = textPromise.split(/[ | \n]/);
        return firstcredsArr[1];
    }

    get password() {
        const locator = $('.col-md-8 div.row');
        const textPromise = locator.getText();
        const firstcredsArr = textPromise.split(/[ | \n]/);
        return firstcredsArr[3];
    }
}

module.exports = new CredsPage();