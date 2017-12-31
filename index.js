var inlineCss = require('inline-css');
var fs = require('fs');

fs.readdir("./svg", (err, files) => {
  files.forEach(function(file) {
    fs.readFile("./svg/" + file, "utf-8", function(err, data) {
      inlineCss(data, {url: " ", removeHtmlSelectors: true}).then(function(html) {
        html = html.replace(/\<\!.*?\>/, "").replace(/\<\?xml.*?\>/, "");
        html = html.replace('viewBox="0 0 720 207.5"', 'viewBox="20 55 670 100"');
        fs.writeFileSync("./svg_converted/" + file, html, { flag: 'wx+', encoding: "utf-8" }, function(err) {
          console.log(html)
        });
      });
    })
  });
})