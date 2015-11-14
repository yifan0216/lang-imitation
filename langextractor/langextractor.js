var fs = require("fs");

function normal(file){
    var text = fs.readFileSync(file, "utf-8");
    var reg1 = /.*?“(.*?)”.*?长苏.*?/;
    var reg2 = /.*?长苏.*?“(.*?)”.*?/;
    return text.split("\n").map(function(d){
        var ret = [];
        var ret1 = reg1.exec(d);
        if(ret1 != null)
            ret.push(ret1[1]);
        var ret2 = reg2.exec(d);
        if(ret2 != null)
            ret.push(ret2[1]);
        return ret.join(",");
    }).filter(function(d){return d.length != 0;});
};

exports.get_words_by_role = function(book, role, file){
    return normal(file);
};

