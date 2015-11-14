var jieba = require("nodejieba");
var langextractor = require("./langextractor/langextractor");


var words = langextractor.get_words_by_role("langyabang", "meichangsu", "dat/langyabang.txt");


var wordsseg = words.map(function(d){return jieba.cut(d.replace(/[，,。…？！]/g, " ")).join(" ");});
console.log(wordsseg.join("\n"));
