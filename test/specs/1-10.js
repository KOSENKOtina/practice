

describe("  ", () => {
    let email, password;
    before(async () => {
        browser.url('https://phptravels.com/demo');
        // const locator = await $$('.col-md-8 div.row');
        // const textPromise = locator.map(e => e.getText());
        // const credsArr = await Promise.all(textPromise);
        // const firstcredsArr = credsArr[0].split(/[ | \n]/);
        // email = firstcredsArr[1];
        // password = firstcredsArr[3];

       // browser.navigateTo('https://www.phptravels.net/');

    })

    it("should take credentials", async () => {
        const locator = await $$('.col-md-8 div.row');
        const textPromise = locator.map(e => e.getText());
        const credsArr = await Promise.all(textPromise);
        const firstcredsArr = credsArr[0].split(/[ | \n]/);
        email = firstcredsArr[1];
        password = firstcredsArr[3];

        browser.navigateTo('https://www.phptravels.net/');
        const myAccountBtn = await $('*=My Account');
        myAccountBtn.click();

    });

})