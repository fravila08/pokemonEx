import puppeteer, { Browser, Page } from "puppeteer";
import { afterAll, beforeAll, describe, it, expect } from "vitest";


describe("Render APP", () =>{
    let browser: Browser;
    let page : Page;

    beforeAll(async() => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 20
        })
        page = await browser.newPage();
        await page.goto("http://localhost:5173/")
    })

    afterAll(async () => {
        await browser.close();
    });

    it("Enter localhost and confirm header value is 'Pokemon API EX' ",async () => {
        await page.waitForSelector("#titleHeader");
        let headerValue = await page.$eval("#titleHeader", (header)=> header.innerHTML);
        expect(headerValue).toBe("Pokemon API EX");
    })
})