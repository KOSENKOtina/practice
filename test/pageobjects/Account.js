class Account {
    constructor() {
        this.homeBtnLocator = 'a[title=\'home\']'
    }

    get homeBtn() {
        $(this.homeBtnLocator).waitForDisplayed();
        return $(this.homeBtnLocator);
    }

}

module.exports = new Account()