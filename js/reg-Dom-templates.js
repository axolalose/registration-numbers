var tempBtnElem = document.querySelector(".RegTemp");
var myRegElem = document.querySelector(".registrationTemp");
var myAddBtnElem = document.querySelector(".addTemp");
var RegTempElem = document.querySelector(".registrationsTemp");
var myShowBtnElem = document.querySelector(".showTemp");
var myWarn = document.querySelector(".warnTemp");
var myResetBtnElem = document.querySelector(".resetTemp");

var userDataElem = document.querySelector(".displayTemp");
var templateSource = document.querySelector(".userTemplate").innerHTML;
var userTemplate = Handlebars.compile(templateSource);

if (localStorage["RegTemp"]) {
  var regStoreTemp = JSON.parse(localStorage["RegTemp"]);
} else {
  regStoreTemp = [];
}

var regLoc = regNumber(regStoreTemp);
var regNumTemp = regLoc.regList();

myAddBtnElem.addEventListener("click", function() {
  var regEntered = myRegElem.value;
    console.log(regEntered);
    regLoc.fromTown(regEntered);
    userDataElem.innerHTML= userTemplate({regTemp: regStoreTemp});
   
    regNumTemp.push(regEntered.toUpperCase());
    localStorage["RegTemp"] = JSON.stringify(regLoc.regList());
    myWarn.innerHTML = ""
})

