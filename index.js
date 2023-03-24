const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.youtube.com/");
    //await page.goto("https://www.traversymedia.com");

    await page.screenshot({ path: "example.png", fullPage: true});
    await page.pdf({path: "example.pdf", format: "A4"})

    //const html = await page.content();
    //console.log(html);
//ok 
    //const title = await page.evaluate(() => document.title);
    //console.log(title);

    //const text = await page.evaluate(() => document.body.innerText)

    //const links = awaitpage.evaluate(()=> Array.from(document.querySelectorAll("a"), (e) => e.href));
    //await browser.close();
}
run();