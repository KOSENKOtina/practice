class Account {
    constructor() {
        this.homeBtnLocator = 'ul li a[title=\'home\']';
    }

    get homeBtn() {
        return $(this.homeBtnLocator);
    }

}

module.exports.Account = new Account();