class HomePage {
    constructor() {
        this.url = 'https://www.phptravels.net/';
        this.loginBtnLocator = '.dropdown-login a.dropdown-item.active';
    }

    navigate() {
        browser.url(this.url);
    }

    get loginBtn() {
        return $(this.loginBtnLocator);
    }

    get loginLink() {
        return this.loginBtn.getAttribute('href')
    }

    getLoginLink() {
        return this.loginBtn.getAttribute('href')
    }

    getTabByName(tabName) {
        $(`a[data-name=${tabName}]`).waitForDisplayed();
        return $(`a[data-name=${tabName}]`);
    }

    addAdultByTab(tabName) {
        $(`#${tabName} .bootstrap-touchspin-up`).waitForDisplayed();
        $(`#${tabName} .bootstrap-touchspin-up`).click();
    }

}

module.exports = new HomePage();