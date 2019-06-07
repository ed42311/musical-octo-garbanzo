const puppeteer = require('puppeteer');

const debug = false;
const options = debug ? {headless: false, slowMo: 150} : {};
const SCREEN_DIR = 'src/test/screenshots/';
const ROOT_URL = 'http://localhost:3000';
let browser;
let page;

describe('End to end test, basic', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch(options);
    page = await browser.newPage();
    await page.goto(ROOT_URL, {waitUntil: 'networkidle2'});
    await page.screenshot({path: `${SCREEN_DIR}main.png`});
  });

  test('User should land on main page', async () => {
    const text = await page.$eval('#App-navbar-text', e => e.innerHTML);
    expect(text).toBe('Articles');
  }, 16000);

  test('User should see 10 articles in left column', async () => {
    const curUserCount = (await page.$$('article.Article-current-user')).length;
    expect(curUserCount).toBe(10);
  }, 16000);

  test('User should see 90 articles in right column', async () => {
    const publicUserCount = (await page.$$('article.Article-public-user')).length;
    expect(publicUserCount).toBe(90);
  }, 16000);

  test('Articles should contain header and text', async () => {
    const element1 = await page.$('article.Article-current-user h2');
    const element2 = await page.$('article.Article-current-user p');
    const element3 = await page.$('article.Article-public-user h2');
    const element4 = await page.$('article.Article-public-user p');

    const result = await page.evaluate((...elements) => {
        return elements.map(element => element.innerHTML);
    }, ...[element1, element2, element3, element4]);
    expect(result.map(i => typeof i === 'string').reduce((a,b) => a+b)).toBe(4);
  }, 16000);

  afterAll(async () => {
    await browser.close();
  });
})