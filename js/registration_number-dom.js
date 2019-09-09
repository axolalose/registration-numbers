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
var resetBtnElem = document.querySelector(".reset");


if (localStorage["Reg"]) {
 var regStore = JSON.parse(localStorage["Reg"]);
} else {
  regStore = [];
  
}
var loc = regNumber(regStore);
var regNum = loc.regList();
allShow(loc.regList());

function RegDom() {
  var warning = regElem.value;
  
  if (warning == "" || warning == undefined) {
    return (warn.innerHTML = "please add reg");
  } else if (loc.warnMassages(warning)) {
    warn.innerHTML = loc.warnMassages(warning);
  }else if(!loc.checkReg(warning.toUpperCase())){
    warn.innerHTML = "not CORRECT town";
  }
   else {   
    if(!regNum.includes(warning.toUpperCase())){
      var btn = document.createElement("li");
      btn.innerHTML = warning;
      show.insertBefore(btn, show.childNodes[0]);
    
      regNum.push(warning.toUpperCase());
      localStorage["Reg"] = JSON.stringify(loc.regList());
      warn.innerHTML = ""

    } else{
      warn.innerHTML = "registration already added";
    }
  }
}
if(localStorage.getItem("Reg")){
  var regStore = JSON.parse(localStorage["Reg"]);
  
  for(var i=0;i < regStore.length; i++){
    var regstoreItem = regStore[i]
    show.innerHTML += "<li>" +regstoreItem+"</li>";
  }
}


function myShow() {
  let radiosElems = document.querySelector('input[name="check"]:checked').value;
  show.innerHTML = "";

  let regFilter = [];
  regFilter = loc.fromTown(radiosElems);


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

window.addEventListener("load", allShow)

function resetBtn() {
  window.location.reload();
  localStorage.clear();
  show.innerHTML = "";
}

resetBtnElem.addEventListener('click', resetBtn)
showBtnElem.addEventListener("click", myShow);
addBtnElem.addEventListener("click", RegDom);

