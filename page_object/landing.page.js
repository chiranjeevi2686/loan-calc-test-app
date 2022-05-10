const { expect } = require("chai");
const constants = require("../features/support/constants");
const config = require("../features/support/config") 

class LandingPage {

    async navigate() {
        await page.goto(
            config.prod.url,
            {waitUntil: 'load'});
    }
    async clientDetails(appType, dependends, propertyType) {
        await page.locator(constants.clientDetailsSelectors.appType).click();
        await page.selectOption(constants.clientDetailsSelectors.dependents, dependends)
        await page.locator(constants.clientDetailsSelectors.homeType).click();

    }

    async clientEarnings(annualIncome, otherIncome) {
        await page.locator(constants.clientEarningsSelectors.annualIncome).fill(annualIncome);
        await page.locator(constants.clientEarningsSelectors.otherIncome).fill(otherIncome);

    }

    async clientExpenses(livingExp, hlRepayments, olRepayments, oCommitments, creditCard) {
        await page.locator(constants.clientExpensesSelectors.livingExp).fill(livingExp);
        await page.locator(constants.clientExpensesSelectors.hlRepayments).fill(hlRepayments);
        await page.locator(constants.clientExpensesSelectors.olRepayments).fill(olRepayments);
        await page.locator(constants.clientExpensesSelectors.oCommitments).fill(oCommitments);
        await page.locator(constants.clientExpensesSelectors.creditCard).fill(creditCard);
    }

    async calculate() {
        await page.locator(constants.buttonSelectors.calculate).click();
    }

    async verifyEstimatedAmt(expectedValue) {

     await page.waitForLoadState();
     //TODO: Not ideal to use hard wait, however there seems to be an issue with waitForLoadState method
     //on the app and need further analysis to find correct load state and remove hard wait
     await page.waitForTimeout(2000);

     const actualValue = await page.$eval(constants.textSelectors.estimatedAmt, (el) => el.innerText);
     expect(actualValue).to.equal(expectedValue)
    }

    async startOver() {
        await page.locator(constants.buttonSelectors.startOver).click();
    }

    async verifyReset() {

        const livingExp = await page.$eval(constants.clientExpensesSelectors.livingExp, (el) => el.value);
        const hlRepayments = await page.$eval(constants.clientExpensesSelectors.hlRepayments, (el) => el.value);
        const creditCard = await page.$eval(constants.clientExpensesSelectors.creditCard, (el) => el.value);

        expect(livingExp).to.equal('0')
        expect(hlRepayments).to.equal('0')
        expect(creditCard).to.equal('0')

        //TODO: annualIncome, otherIncome, olRepayments has data id issues, once proper data id's are added to app code 
        // those can be included in the assertions

       }
}
module.exports = { LandingPage };




