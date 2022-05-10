const {BeforeAll, Before, AfterAll, After, setDefaultTimeout} = require ('cucumber');
const { chromium } = require('playwright');



// Create a global browser for the test session.
BeforeAll(async() =>{
    setDefaultTimeout(30000)
    const playwright = require('playwright')

            global.browser = await playwright['chromium'].launch({
                headless: false
            });
        
});

AfterAll(async() => {
     await global.browser.close();
});

// Create a fresh browser context for each test.
Before(async(scenario) =>{
    global.context = await global.browser.newContext({
        recordVideo : {
          dir : 'videos/'+scenario.pickle.name,
        }
    });
    global.page = await global.context.newPage();
});

After(async() => {
    await global.page.close();
});
