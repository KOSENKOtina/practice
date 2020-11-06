class HomePage {
    constructor() {
        this.url = 'https://www.phptravels.net/';
        this.loginBtnLocator = '.dropdown-login a.dropdown-item.active';
        this.destinationFieldLocator ='.locationlisttours a.select2-choice';
        this.tourTypeLocator = '#tours a.chosen-single';
        this.tourTypeDDNoptionLocator = '[data-option-array-index="4"]';
        this.dateLocator = '#tours input#DateTours';
        this.searchBtnLocator = '#tours button[type="submit"]';
    }

    navigate() {
        browser.url(this.url);
    }

    get loginBtn() {
        return $(this.loginBtnLocator);
    }
    get destination(){
        return $(this.destinationFieldLocator);
    }
    get searchBtn(){
        return $(this.searchBtnLocator);
    }

    getLoginLink() {
        return this.loginBtn.getAttribute('href')
    }

    getTabByName(tabName) {
        $(`a[data-name=${tabName}]`).waitForDisplayed();
        return $(`a[data-name=${tabName}]`);
    }

    addAdultByTab() {
        $('#tours .bootstrap-touchspin-up').waitForDisplayed();
        $('#tours .bootstrap-touchspin-up').click();
    }

    setDestination (destination) {
        const checkDest = this.destination;
        checkDest.scrollIntoView();
        checkDest.click();
       checkDest.keys(destination);
       $('span.select2-match').click();
    }
    setTourType() {
        const tourType = $(this.tourTypeLocator);
        tourType.click();
        const ferry = $(this.tourTypeDDNoptionLocator);
        ferry.scrollIntoView();
        ferry.waitForDisplayed();
        ferry.click();
    }
    setDate(date) {
        $(this.dateLocator).clearValue();
        $(this.dateLocator).setValue(date);
    }
    clickSearch() {
        this.searchBtn.click();
    }
}

module.exports = new HomePage();