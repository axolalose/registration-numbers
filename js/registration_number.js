function regNumber(loc) {
  var storedReg = loc || [];

  function regList() {
    return storedReg;
  }

  function warnMassages(Reg) {
    var regUp = Reg.toUpperCase();
    var regex = (/([A-Z]{2}\s[0-9]{3}\W[0-9]{3})$/);
    var isValid = regex.test(regUp);
    if (!isValid) {
      return "PLEASE ENTER CORRECT REGISTRATION";
    }
  }
  function checkReg(plate){
    var vaildReg = ['CA ', 'CY', 'CW'];
    var regExpected = plate.toUpperCase();
    var results = false;
    for(var i=0; i<vaildReg.length; i++){
      const elem = vaildReg[i];
      if(regExpected.startsWith(elem)){
        results = true;
      }
    }
    return results;
  }


  function fromCape(regsFromCapeTown) {
    
    var capeTown = [];
    for (i = 0; i < regsFromCapeTown.length; i++) {
      var elem = regsFromCapeTown[i];
     // console.log(elem);
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

  return {
    fromCape,
    fromBelv,
    fromMel,
    regList,
   warnMassages,
   checkReg
  
  
  };

}