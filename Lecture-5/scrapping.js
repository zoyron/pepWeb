const request = require('request');
const fs = require("fs");
const cheerio = require('cheerio');

request("https://www.espncricinfo.com/series/19322/scorecard/1214282/new-zealand-xi-vs-indians-tour-match-india-in-new-zealand-2019-20",
  function(err, res, html) {
    if(err == null && res.statusCode == 200)
      parseHtml(html);
    else if(res.statusCode == 404)
      console.log("Page not found");
  });

  function parseHtml(html) {
    const $ = cheerio.load(html);
    let tableHtml = $(".scorecard-section.bowling").html();
    console.log("Parsing Html");
    fs.writeFileSync("table.html", tableHtml);
    console.log("file written to the disk");
  }