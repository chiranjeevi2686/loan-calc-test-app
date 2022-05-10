const { Given, When, Then } = require('cucumber')
const { LandingPage } = require('../../page_object/landing.page')


const landingpage = new LandingPage();


Given('User launched loan calculator page', async () => {
    await landingpage.navigate();
});

When('User enter details {string}, {string} and {string}', async (appType, dependends, propertyType) => {
    await landingpage.clientDetails(appType, dependends, propertyType);
});

When('User enter earnings {string} and {string}', async (annualIncome, otherIncome) => {
    await landingpage.clientEarnings(annualIncome, otherIncome);
});

When('User enter expenses {string}, {string}, {string}, {string}, {string}', async (livingExp, hlRepayments, olRepayments, oCommitments, creditCard) => {
    await landingpage.clientExpenses(livingExp, hlRepayments, olRepayments, oCommitments, creditCard);
});

Given('User clicks calculate button', async () => {
    await landingpage.calculate();
});

Then('Verify estimated borrowing amount is ${string}', async (estimatedAmt) => {
    await landingpage.verifyEstimatedAmt(estimatedAmt);
    
});

Given('User clicks startOver button', async () => {
    await landingpage.startOver();
});

Then('Verify all the fields are reset to default', async () => {
    await landingpage.verifyReset();
    
});


