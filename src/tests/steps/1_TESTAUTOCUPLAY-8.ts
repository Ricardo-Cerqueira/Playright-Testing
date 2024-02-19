import { Given, When, Then } from "@cucumber/cucumber";
import { browser, page } from "./1_TESTAUTOCUPLAY-7";
import { expect } from "@playwright/test";


Given ('the user clicks on the learn more button in the join us section', async function () {
    await page.getByText("Learn More!").click()
})

When ('the user clicks on the {string} job opening', async function(job) {
    await page.getByTitle(job).click();
})

Then ('the user is redirected to the {string} job details', async function(job) {
    await expect(page).toHaveURL(/.*\/quality-assurance-qa-automation-engineer-202303\/$/)
    await expect(page).toHaveTitle(job + " | Present Technologies")
});

Then ('the following sections are displayed:', async function (dataTable) {
    const selections = dataTable.rows();
    await selections.forEach(async (selection:string) => {
        await expect(page.getByText(selection)).toBeVisible();
    });
});

Then ('an aplly online form is visible', async function () {
    await expect(page.getByText("Apply online")).toBeVisible();
    await browser.close();
})