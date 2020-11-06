class CredsPage {
    constructor() {
        this.url = 'https://phptravels.com/demo';
        this.fullEmailxPath = '/html/body/div[2]/main/section[1]/div/div/div[2]/div/div/div[2]/div/div/div[2]/div[2]/div/text()[1]';
        this.fullPasswordxPath = '/html/body/div[2]/main/section[1]/div/div/div[2]/div/div/div[2]/div/div/div[2]/div[2]/div/text()[2]';
    }

    navigate() {
        browser.url(this.url);
    };

    get email() {
        const locator = $('=Email');
        locator.scrollIntoView();
        const textPromise = locator.getText();
       // const firstcredsArr = textPromise.split(/[ | \n]/);
        return textPromise//firstcredsArr[1];
    }

    get password() {
        const locator = $(this.fullPasswordxPath);
        const textPromise = locator.getText();
      //  const firstcredsArr = textPromise.split(/[ | \n]/);
        return textPromise;//firstcredsArr[3];
    }
}

module.exports = new CredsPage();