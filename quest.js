console.log("quest.js loaded");

quest = function() {
    //ini
};

quest.render = txt => {
    var html = "";
    var txt0 = txt;

    // remove blocked out
    txt = txt.replace(/\/\*[\s\S]+\*\//g, "");
    txt = txt.replace(/\/\/.*\n/g, "");

    // separate  questions
    txt = txt.split(/\n\n/).map(qq => {
        qq = qq.split("\n");
        if (qq.length == 1) {
            //html += `<h3>${qq[0]} <span style="font-size:small;cursor:hand;color:blue">[hide]</span></h3>`
            html += `<h3>${qq[0]}</h3>`;
        } else if (qq.length > 1) {
            html += `<div><b>${qq[0]}</b><br>`;
            qq.slice(1).forEach(q => {
                html += `${q}<br>`;
            });
            html += "</div>";
        }
    });

    // ---- html elements ---- //

    // Check Box []
    html = html.replace(/\*/g, "[]");
    html = html.replace(/\[\]/g, '<input type="checkbox">');

    html = html.replace(/... GO TO/g, " ->");

    // Year |__|__|__|__|
    html = html.replace(/\|__\|__\|__\|__\|/g, "|_|");

    // Age |__|__|
    html = html.replace(/\|__\|__\|/g, "|_|");

    // Integer |_|
    html = html.replace(/\|_\|/g, "<input type='number'>");


    // Regular input field |__|
    html = html.replace(/\|__\|/g, "<input>");

    // Text Area |___|
    html = html.replace(/\[text box\]/g, "|___|");
    html = html.replace(/\|___\|/g, "<textarea></textarea>");

    // Phone Number |(###)-###-####|
    html = html.replace(
        /\|\(\###\)\-###-####\|/g,
        "<input type='tel' id='phone' name='phone' pattern='(((d{3}) ?)|(d{3}-))?d{3}-d{4}'>"
    );

    // Social Security |###-##-####|
    html = html.replace(
        /\|###-##-####\|/g,
        "<input type='tel' id='social' name='social' pattern='^(?!219099999|078051120)(?!666|000|9d{2})d{3}(?!00)d{2}(?!0{4})d{4}$'>"
    );

    return html + "<hr>"; //+txt0
};

class Questionnaire {}