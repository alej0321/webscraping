const puppeteer = require('puppeteer')
async function scrapeInfo(url){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    //$x selector item puppeteer del item
    //parentesis de xpath al inspeccionar el texto
    const [el] = await page.$x('//*[@id="indicadores-busqueda"]/div[1]/ul/li[1]/strong')
    const txt = await el.getProperty('textContent')
    const precioInternoReferencia = await txt.jsonValue()

    const [el2] = await page.$x('//*[@id="indicadores-busqueda"]/div[1]/ul/li[3]/strong')
    const txt2 = await el2.getProperty('textContent')
    const bolsaNY = await txt2.jsonValue()

    const [el3] = await page.$x('//*[@id="indicadores-busqueda"]/div[1]/ul/li[4]/strong')
    const txt3 = await el3.getProperty('textContent')
    const tasaCambio = await txt3.jsonValue()

    browser.close()

    console.log({precioInternoReferencia,bolsaNY,tasaCambio})

}
scrapeInfo('https://federaciondecafeteros.org/wp/blog/venta-de-cafe-a-futuro-una-gran-alternativa/')