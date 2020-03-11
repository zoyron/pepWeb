const request = require('request');
const fs = require("fs");
const cheerio = require('cheerio');

request("https://www.espncricinfo.com/scores/series/19237",
  function(err, res, html) {
    if(err == null && res.statusCode == 200)
      parseHtml(html);
    else if(res.statusCode == 404)
      console.log("Page not found");
  });

  function parseHtml(html) {
    let co = cheerio.load(html);
    let cardsHtml = (".cscore.cscore--final.cricket.cscore--watchNotes");
    for(let i = 0;i<cardsHtml.length;i++) {
      let format = co(cardsHtml[i]).find(".cscore_info-overview").html();
      let ans = format.includes("T20I") || format.includes("ODI");
      if(ans) {
        console.log(format);
      }
    }
    console.log("file written to the disk");
  }