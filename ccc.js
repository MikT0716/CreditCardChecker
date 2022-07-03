const validateCred = () => {
  var asd = document.querySelector("#cardnumber").value;

  let pairSum = 0;
  let allSum = 0;

  if (asd.length == 15) {
    for (let i = asd.length - 1; i >= 0; i--) {
      if (i % 2 != 0) {
        if (asd[i] * 2 > 9) {
          pairSum += parseInt(asd[i]) * 2 - 9;
        } else {
          pairSum += parseInt(asd[i]) * 2;
        }
      } else {
        allSum += parseInt(asd[i]);
      }
    }

    if ((allSum + pairSum) % 10 === 0) {
      document.querySelector("#result").innerHTML = "VALID";
      document.querySelector("#resultbox").style.backgroundColor =
        "rgba(0,255,127, .5)";
    } else {
      document.querySelector("#result").innerHTML = "INVALID";
      document.querySelector("#resultbox").style.backgroundColor =
        "rgba(181,0,43, .5)";
    }
  }

  if (asd.length == 16) {
    for (let i = asd.length - 1; i >= 0; i--) {
      if (i % 2 === 0) {
        if (asd[i] * 2 > 9) {
          pairSum += parseInt(asd[i]) * 2 - 9;
        } else {
          pairSum += parseInt(asd[i]) * 2;
        }
      } else {
        allSum += parseInt(asd[i]);
      }
    }
    if ((allSum + pairSum) % 10 === 0) {
      document.querySelector("#result").innerHTML = "VALID";
      document.querySelector("#resultbox").style.backgroundColor =
        "rgba(0,255,127, .5)";
    } else {
      document.querySelector("#result").innerHTML = "INVALID";
      document.querySelector("#resultbox").style.backgroundColor =
        "rgba(181,0,43, .5)";
    }
  }

  switch (asd[0]) {
    case "3":
      document.querySelector("#cardicon img").style.visibility = "visible";
      document.querySelector("#cardicon img").src = "style/amex.png";
      break;
    case "4":
      document.querySelector("#cardicon img").style.visibility = "visible";
      document.querySelector("#cardicon img").src = "style/visa.svg";
      break;
    case "5":
      document.querySelector("#cardicon img").style.visibility = "visible";
      document.querySelector("#cardicon img").src = "style/master.png";
      break;
    case "6":
      document.querySelector("#cardicon img").style.visibility = "visible";
      document.querySelector("#cardicon img").src = "style/discover.png";
  }
};

document.querySelector("#cardnumber").addEventListener("input", validateCred);

//------------------------------------------PÉLDÁK LOGOLÁSA A KONZOLRA-------------------------------------------------//

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

const join = function (qwe) {
  console.log(qwe.join(""));
};

console.log("Valid ones:");
join(valid1);
join(valid2);
join(valid3);
join(valid4);
join(valid5);
console.log("Invalid ones:");
join(invalid1);
join(invalid2);
join(invalid3);
join(invalid4);
join(invalid5);
