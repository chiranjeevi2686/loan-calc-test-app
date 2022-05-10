const clientDetailsSelectors = {
    appType: 'id=application_type_single',
    dependents: '[title="Number of dependants"]',
    homeType: 'id=borrow_type_home'
}

const clientEarningsSelectors = {
    //TODO: This is not ideal xPath/selector , a proper id or data-test-id can be added in the application code
    annualIncome: '//*[@id="main-container"]/div[1]/div/div/div[2]/div/div/div/div/div[1]/div[1]/div[2]/div/div[2]/div/div[1]/div/input',
    otherIncome: '//*[@id="main-container"]/div[1]/div/div/div[2]/div/div/div/div/div[1]/div[1]/div[2]/div/div[2]/div/div[2]/div/input',
}
const clientExpensesSelectors = {
    livingExp: 'id=expenses',
    hlRepayments: 'id=homeloans',
    olRepayments: 'id=otherloans',
    //TODO: This is not ideal xPath/selector , a proper id or data-test-id can be added in the application code
    oCommitments: '//*[@id="main-container"]/div[1]/div/div/div[2]/div/div/div/div/div[1]/div[1]/div[2]/div/div[3]/div/div[4]/div/input',
    creditCard: 'id=credit',
}
const textSelectors = {
    estimatedAmt: 'id=borrowResultTextAmount',
}
const buttonSelectors = {
    calculate: 'id=btnBorrowCalculater',
    //TODO: This is not ideal xPath/selector , a proper id or data-test-id can be added in the application code
    startOver: '//*[@id="main-container"]/div[1]/div/div/div[2]/div/div/div/div/div[1]/div[2]/div[1]/div/div[1]/div/button/span'
}

module.exports = {
    clientDetailsSelectors,
    clientEarningsSelectors,
    clientExpensesSelectors,
    buttonSelectors,
    textSelectors

}