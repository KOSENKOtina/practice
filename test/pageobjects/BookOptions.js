class BookOptions {
    constructor() {
        this.conatainerLocator = 'aside';
        this.dateLocator = '[type="text"][name="date"]';
        this.changeDateBtnLocator = 'button.mt-5.date';
        this.adultsAmountLocator = 'select[name="adults"]';
        this.totalCostLocator = '.totalCost';
        this.depositLocator = '.totaldeposit';
        this.bookNowBtnLocator = '.btn-action.btn-lg';
    }

    get container() {
        return $(this.conatainerLocator);
    }

    get date() {
        return $(this.dateLocator);
    }

    get changeDateBtn() {
        return $(this.changeDateBtnLocator);
    }

    get adultsAmount() {
        return $(this.adultsAmountLocator);
    }

    get totalCost() {
        return $(this.totalCostLocator);
    }

    get deposit() {
        return $(this.depositLocator);
    }
    get bookNowBtn() {
        return $(this.bookNowBtnLocator);
    }
}

module.exports = new BookOptions();