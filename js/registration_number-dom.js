var townsBtnElem = document.querySelector(".Reg");
var regElem = document.querySelector(".registration");
var fromTownElem = document.querySelector(".from-town");
var checkingBtnElem = document.querySelector(".checking");
var addBtnElem = document.querySelector(".add");
var RegistrationElem = document.querySelector(".registrations");
var show = document.querySelector(".display");
var btn1 = document.createElement("button");
var showBtnElem = document.querySelector(".show");
var warn = document.querySelector(".warnMAssages");

let regStore;

if (localStorage["Reg"]) {
  regStore = JSON.parse(localStorage["Reg"]);
} else {
  regStore = [];
}
var loc = regNumber(regStore);
// var factoryInstance = regNumber(regStore);

var regNum = loc.regList();
//addBtnElem.innerHTML = regNum.regTown()

function RegDom() {
  var warning = regElem.value;
  //var typeReg = RegistrationElem.value;
  if (warning == "" || warning == undefined) {
    return (warn.innerHTML = "please add reg");
  } else if (loc.warnMassages(warning)) {
    show.innerHTML = loc.warnMassages(warning);
  } else {
    var btn = document.createElement("li");
    show.innerHTML = '';
    //instance.find(show)
    //instance.getAll();
    btn.innerHTML = warning;
    show.insertBefore(btn, show.childNodes[0]);
    regNum.push(warning);

    // var regex = /(CA-Z){2}\5[0-9]{6}/g;
    // var newReg = regex.test();
    // if (!newReg) {
    //   errorElement.innerHTML = "invalid";
    //   errorMassages();
    //   return;
    // }
    localStorage["Reg"] = JSON.stringify(regNum);
  }
}

function selectReg(plate) {
  var validReg = ["CA", "CY", "CW"];
  var regCase = plate.toUpperCase();
  var regResults = false;
  for (let i = 0; i < validReg.length; i++)
    //const regCase = validReg[i];
    if (regCase.startsWith(regResults)) {
      result = true;
    }
  return result;
}

function myShow() {
  let radiosElems = document.querySelectorAll(".radios");
  show.innerHTML = "";
  let regFilter = [];
  for (let i = 0; i < radiosElems.length; i++) {
    let currentRadio = radiosElems[i];

    if (currentRadio.checked) {
      //console.log(currentRadio.value)
      if (currentRadio.value === "Bellvile") {
        regFilter = loc.fromBelv(regNum);
      }
      if (currentRadio.value === "Cape Town") {
        regFilter = loc.fromCape(regNum);
      }
      if (currentRadio.value === "Malmesbury") {
        regFilter = loc.fromMel(regNum);
      }
      if (currentRadio.value === "") {
        regFilter = loc.regList();
      }
    }
  }
  if (regFilter.length > 0) {
    for (let i = 0; i < regFilter.length; i++) {
      const element = regFilter[i];
      var btn = document.createElement("li");
      btn.classList.add("plate");
      btn.innerHTML = element;
      show.insertBefore(btn, show.childNodes[0]);
    }
  }
}
function allShow(regAll) {
  var all = document.createElement("li");
  var text = document.createTextNode(regAll);
  all.appendChild(text);
  return text;
}

//addBtnElem.addEventListener('click', addBtn)
showBtnElem.addEventListener("click", myShow);
addBtnElem.addEventListener("click", RegDom);

// var myMap =  new Map()
// myMap.set("unalo", 1);

// myMap.get(unalo);
// myMap.has(unalo) {
//   myMap.
// }
