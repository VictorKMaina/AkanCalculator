// var check = function () {
//   var d = new Date();
//   var userDate = document.getElementById("date").value;
//   var userMonth = document.getElementById("month").value;
//   var userYear  = document.getElementById("year").value;
//   d.setDate(parseInt(14));
//   d.setMonth(parseInt(2)-1);
//   d.setFullYear(parseInt(2020));
//   return d.getDay();
// }

var check = function() {
    var d = new Date();
    var userDate = document.getElementById("date").value;
    var userMonth = document.getElementById("month").value;
    var userYear = document.getElementById("year").value;
    d.setDate(parseInt(userDate));
    d.setMonth(parseInt(userMonth) - 1);
    d.setFullYear(parseInt(userYear));
    return d.getDay();
}

function output() {
    if (check() === 0) {
        return ("Sunday");
    } else if (check() === 1) {
        return ("Monday");
    } else if (check() === 2) {
        return ("Tuesday");
    } else if (check() === 3) {
        return ("Wednesday");
    } else if (check() === 4) {
        return ("Thursday");
    } else if (check() === 5) {
        return ("Friday");
    } else if (check() === 6) {
        return ("Saturday");
    }
}

function entry() {
    document.getElementById("entry").innerHTML = output();
}