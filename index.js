var inlineCss = require('inline-css');
var fs = require('fs');

var files = fs.readdirSync("./svg");
files.forEach(function (file) {
  var data = fs.readFileSync("./svg/" + file, "utf-8")
  inlineCss(data, { url: " ", removeHtmlSelectors: true }).then((html) => {
    html = html.replace(/\<\!.*?\>/g, "").replace(/\<\?xml.*?\>/g, "").replace(/\'/g, "&#39;").replace(/\"/g, "'");
    fs.writeFileSync("./svg_converted/" + file, html, { encoding: "utf-8" }, () => { });
  });
});
