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
      `<h1>βSmart π°π­ αα·α Pleng αα½αβα§αααααααβααΆααααβααααΎβααβααΆααβαααα α’αα·ααΆαβααα‘ααααΆα αααΈβα αααΈβααΆβαα»α α±ααβααΆααα»αβααΆαααα’βααΆαβαα»α β!</h1>`,
      `<p>ααααα</p>`,
    ].join('')
  )
  const buffer = await page.screenshot({ type: 'jpeg' });
  

  await browser.close();
  console.log(`data:image/jpeg;base64,${buffer.toString('base64')}`);

})();