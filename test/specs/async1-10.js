

describe("  ", () => {
    let email, password;
    before(async () => {
        browser.url('https://phptravels.com/demo');
    })

    it("should take credentials", async () => {
        const locator = await $$('.col-md-8 div.row');
        const textPromise = locator.map(e => e.getText());
        const credsArr = await Promise.all(textPromise);
        const firstcredsArr = await credsArr[0].split(/[ | \n]/);
        email = firstcredsArr[1];
        password = firstcredsArr[3];
        await browser.url('https://www.phptravels.net/');
       // const myAccountBtn '//= await $('//li[3]/div')//$('#dropdownCurrency=My Account');
        myAccountBtn.click();
        const loginLink = await $('.dropdown-item.active.tr');//'//a[@class="dropdown-item active tr'
        loginLink.click();
        const emailInput = await $('input[type="email"]');
        emailInput.focus();
        emailInput.sendKeys(email);
        const passwordInput = await $('input[type="password"]');
        passwordInput.focus();
        passwordInput.sendKeys(password);


    });

})