const puppeteer = require('puppeteer');

async function scrapeImage(url) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    page.goto(url);

    const [el] = await page.$x('//*[@id="section-directions-trip-0"]');
    const src = el.getProperty('src');
    const srcTxt = await src.jsonValue();

    console.log({srcTxt});
}


scrapeImage('https://www.google.com/maps/dir/37.5045579,127.0038/37.4851217,127.1049716');