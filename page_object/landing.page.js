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
     const actualValue = await page.$eval(constants.textSelectors.estimatedAmt, (el) => el.innerText);
     expect(actualValue).to.equal(expectedValue)
    }

    async startOver() {
        await page.locator(constants.buttonSelectors.startOver).click();
    }

    async verifyReset() {

       }
}
module.exports = { LandingPage };




