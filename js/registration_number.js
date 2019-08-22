function regNumber(loc) {
  var getTown = "";
  var storedReg = [];
  //var number = "";

  function regTown() {
    // var l =
    return storedReg;
  }
//   function allReg(Reg) {
//     var regShow = [];
//     var apear = Reg;
//     if (!apear.includes(Reg)) {
// //storedReg.push(regShow);
//     }
//   }
  function regList() {
    return storedReg;
  }

  function warnMassages(Reg) {
    var regUp = Reg.toUpperCase();
    var regex = /([A-Z]{2}\s[0-9]{3}\s[0-9]{3})/g;
    var isValid = regex.test(regUp);
    // console.log(isValid);
    if (!isValid) {
      return "PLEASE ENTER CORRECT REGISTRATION";
    }
  }
  // function dontRepeat(Reg){
  //   var apeared = Reg.value;
  //   if(regex !== null){
    
  //     if (storedReg[regUp] === undefined) {
  //       storedReg[regUp] = 0;
  //     }
  // }

  function fromCape(regsFromCapeTown) {
    var capeTown = [];
    for (i = 0; i < regsFromCapeTown.length; i++) {
      var elem = regsFromCapeTown[i];
      if (elem.startsWith("CA")) {
        capeTown.push(elem);
      }
    }

    return capeTown;
  }
  function fromBelv(regsFromBelv) {
    var regBelv = [];
    for (i = 0; i < regsFromBelv.length; i++) {
      var elem = regsFromBelv[i];
      if (elem.startsWith("CY")) {
        regBelv.push(elem);
      }
    }

    return regBelv;
  }

  function fromMel(regsFromMel) {
    var regMel = [];
    for (i = 0; i < regsFromMel.length; i++) {
      var elem = regsFromMel[i];
      if (elem.startsWith("CW")) {
        regMel.push(elem);
      }
    }sameName

    return regMel;
  }

  //console.log(storedReg)
  return {
    regTown,
    fromCape,
    fromBelv,
    fromMel,
    regList,
   warnMassages,
  // dontRepeat
  };
}

//  var test = regNumber();
//  var regs = ['CA 2323', 'CA 777', 'CY 2323']

//  alert(test.fromCape(regs));
