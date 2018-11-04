"use strict";

$(function () {

        $("#btnConvert").click(function (e) {
                e.stopPropagation();
                e.preventDefault();

                var single = $("#txtSingle").val();

                // pre-checks
                if (!single) {
                        return;
                }

                single = single.trim();
                // var i = /regex/p;
                // /((?:var\s{1})?\s*(?:[A-a0-9]+)?\s*=\s*)?\/(.+)\/([A-a0-9]+)?(;)?/i
                // 1: "var ciao =" (optional)
                // 2: regex (required)
                // 3: regex options (optional)
                // 4: trailing ";" (optional)
                var matches = single.match(/((?:var\s{1})?\s*(?:[A-a0-9]+)?\s*=\s*)?\/(.+)\/([A-a0-9]+)?(;)?/i);

                // split regex into parts
                var maxNumChars = parseInt($("#txtNumChars").val());
                if (maxNumChars < 10) maxNumChars = 50;
                var doneChars = 0;
                var regex = matches[2];
                var regexArray = [];
                while (regex.length > doneChars) {
                        var numChars = regex.length - doneChars > maxNumChars ? maxNumChars : regex.length - doneChars;
                        var r = regex.substring(doneChars, doneChars + numChars);

                        // escape regex
                        r = (r + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');

                        // add line delimiters
                        r = "    \"" + r + "\"+";

                        regexArray.push(r);
                        doneChars += numChars;
                }

                // build result regex string
                var result = regexArray.join("\n").replace(/.$/, "");

                // add leading stuff
                var lvd = "var r = new RegExp(\n";
                result = lvd + result;

                // add trailing stuff
                if (matches[3]) {
                        result += ", \"" + matches[3] + "\"";
                }
                result += ");";

                $("#txtMulti").val(result);
                return false;
        });
});

