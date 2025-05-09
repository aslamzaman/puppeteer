const express = require("express");
const router = express.Router();
const puppeteer = require('puppeteer');


const myData = async (url) => {
  let browser;
  try {

    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

  //  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36');


    await page.goto(url, {
      waitUntil: 'domcontentloaded'
    });

    const result = await page.evaluate(() => {

      const pContent = document.querySelectorAll('div[data-testid*=conversion] > div:nth-child(1) > p');
      if (!pContent) return { aslam: "Aslam" };
      return Array.from(pContent).map(item => item.textContent.trim()).join(" ");
    });
    return result

  } catch (err) {
    console.error(err);
    return (
      { message: "Scraping failed", error: err.message },
      { status: 500 }
    );
  } finally {
    if (browser) await browser.close();
  }
};






router.get("/", async (req, res) => {
  // http://localhost:8080/test?value=50&from=USD&to=BDT
  const value = req.query.value;
  const f = req.query.from;
  const t = req.query.to;
  const url = `https://www.xe.com/currencyconverter/convert/?Amount=${value}&From=${f}&To=${t}`;
  console.log({ value, f, t })

  const data = await myData(url);

  res.send(data);
});

module.exports = router;
