import puppeteer from "puppeteer";
import { closeBrowser, getPage, openBrowser } from "../utils/puppeteer";

describe("MultiSelect", () => {
	let page: puppeteer.Page;

	beforeAll(async () => {
		await openBrowser();
	});

	it("Close", async () => {
		page = await getPage("select/MultiSelectDefault.html");
		await page.click("div.kit-selectR");
		const image = await page.screenshot();

		expect(image).toMatchImageSnapshot();
	});

	afterAll(async () => {
		await closeBrowser();
	});
});
