import puppeteer from 'puppeteer';

describe('Search Panel test', () => {
  	test('Input and Button loads correctly', async () => {
		let browser = await puppeteer.launch({
		  	headless: false
		});
		let page = await browser.newPage();

		await page.goto('http://localhost:3001/');
		await page.waitForSelector('.Input');
		await page.waitForSelector('.Button');

		const html = await page.$eval('.Button', e => e.innerHTML);
		expect(html).toBe('Buscar CEP');

		browser.close();
  	}, 16000);

  	test('Can fill input and see results', async () => {
		let browser = await puppeteer.launch({
		  	headless: false,
		});
		let page = await browser.newPage();

		const VALID_CEP = '72316072';

		await page.goto('http://localhost:3001/');
		await page.waitForSelector('.Input');
		await page.click(".Input[name=cep]");
		await page.type(".Input[name=cep]", VALID_CEP);
		await page.click(".Button");

		await page.waitForSelector('.Info__list');

		browser.close();
  	}, 20000);
});