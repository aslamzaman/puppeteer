const express = require("express");
const router = express.Router();
const puppeteer = require('puppeteer');



const compile = () => {



	const releaseFunction = () => {
		const selectDiv = document.querySelectorAll('li[data-testid*=coming-soon-entry] > div:nth-child(2) > div > a');
		if (selectDiv) {
			return Array.from(selectDiv).map(item => {
				return {
					title: item.textContent,
					url: "https://www.imdb.com" + item.getAttribute('href')
				}
			});

		} else {
			return "";
		}
	}




	const release = releaseFunction();

	const x = { release };
	return x;
}




const myData = async () => {
	let browser;
	try {

		browser = await puppeteer.launch({ headless: true });
		const page = await browser.newPage();

		await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36');
		// await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0');

		await page.goto("https://www.imdb.com/calendar/?region=IN&type=MOVIE&ref_=rlm", {
			timeout: 1800000,
			waitUntil: 'domcontentloaded'
		});

		const result = await page.evaluate(compile);
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


	const data = await myData();

	res.send(data);
});

module.exports = router;
