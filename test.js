const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport({ width: 512, height: 512, deviceScaleFactor: 2, });
  page.setContent(
    [
      `<style>`,
      `body { font-family: "Koh Santepheap", san-serif; padding: 2em; margin: 0 }`,
      `h1 { font-weight: normal; font-family: "Koh Santepheap Head", san-serif; }`,
      `</style>`,
      `<h1>​Smart 🇰🇭 និង Pleng ជួយ​ឧបត្ថម្ភ​គាំទ្រ​ធ្វើ​បទ​ចាស់​របស់ អធិរាជ​សំឡេងមាស ស៊ី​ន ស៊ី​សា​មុត ឱ្យ​មានគុណ​ភាពល្អ​ជាង​មុន ​!</h1>`,
      `<p>ខ្មែរ</p>`,
    ].join('')
  )
  const buffer = await page.screenshot({ type: 'jpeg' });
  

  await browser.close();
  console.log(`data:image/jpeg;base64,${buffer.toString('base64')}`);

})();