function regNumber(loc) {
  //var getTown = [""];
 // console.log(getTown.slice(9));
  var storedReg = [];
  //var number = "";

  function regTown() {
    // var l =
    return storedReg;
  }


  // function List(Reg){
  //   var getTown = [];
  //   if (getTown.length === 2){
  //     return;
  //   }else if(getTown[Reg] === undefined){
  //     return 0;
  //   }
  // }

  function regList() {
    return storedReg;
  }

  function warnMassages(Reg) {
    var regUp = Reg.toUpperCase();
    //var myREgs = myREgs.slice(0, 9);
    var regex = /([A-Z]{2}\s[0-9]{3}\s[0-9]{3})$/;
    var isValid = regex.test(regUp);
    // console.log(isValid);
    if (!isValid) {
      return "PLEASE ENTER CORRECT REGISTRATION";
    }
  }

  function fromCape(regsFromCapeTown) {
    var capeTown = [];
    for (i = 0; i < regsFromCapeTown.length; i++) {
      var elem = regsFromCapeTown[i];
      console.log(elem);
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
    }

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
  //  List
  
  // dontRepeat
  };

}
//  var test = regNumber();
//  var regs = ['CA 2323', 'CA 777', 'CY 2323']

//  alert(test.fromCape(regs));
