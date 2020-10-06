class CredsPage {
    constructor() {
    }

    navigate() {
        browser.url('https://phptravels.com/demo');
    };

    get email() {
        const locator = $('.col-md-8 div.row');
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