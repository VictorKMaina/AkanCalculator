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
function day() {
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
function male() {
  if (check() === 0) {
      return ("Kwasi");
  } else if (check() === 1) {
      return ("Kwadwo");
  } else if (check() === 2) {
      return ("Kwabena");
  } else if (check() === 3) {
      return ("Kwaku");
  } else if (check() === 4) {
      return ("Yaw");
  } else if (check() === 5) {
      return ("Kofi");
  } else if (check() === 6) {
      return ("Kwame");
  }
}
function female() {
  if (check() === 0) {
      return ("Akosua");
  } else if (check() === 1) {
      return ("Adwoa");
  } else if (check() === 2) {
      return ("Abenaa");
  } else if (check() === 3) {
      return ("Akua");
  } else if (check() === 4) {
      return ("Yaa");
  } else if (check() === 5) {
      return ("Afua");
  } else if (check() === 6) {
      return ("Ama");
  }
}
function gender() {
  var male = document.getElementById("male").checked;
  var female = document.getElementById("female").checked;
  if (male == true) {
    return "male";
  } else if (female == true) {
    return "female";
  }
}

function step1() {
  var step1 = document.getElementById("step1");
  var step2 = document.getElementById("step2");
  if (step1.style.display === "none") {
    step1.style.disp1ay = "block";
  } else {
    step1.style.display = "none";
    step2.style.display = "block";
  }
}
function step2() {
  var step2 = document.getElementById("step2");
  var step3 = document.getElementById("step3");
  if (step2.style.display === "none") {
    step2.style.disp1ay = "block";
  } else {
    step2.style.display = "none";
    step3.style.display = "block";
  }
}
function step3() {
  var step3 = document.getElementById("step3");
  var step4 = document.getElementById("step4");
  gender();
  if (step3.style.display === "none") {
    step3.style.disp1ay = "block";
  } else {
    step3.style.display = "none";
    step4.style.display = "block";
    if (gender() == "male") {
      document.getElementById("akanName").innerHTML = male();
    } else if (gender() == "female") {
      document.getElementById("akanName").innerHTML = female();
    }
  }
}