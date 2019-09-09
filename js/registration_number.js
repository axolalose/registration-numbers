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
  function fromTown(location) {
    
    var town = [];
    for (i = 0; i < storedReg.length; i++) {
      var elem = storedReg[i];
      console.log(elem);
      console.log(location)
      if (elem.startsWith(location)) {
        town.push(elem);
      }
    }
    return town;
  }


  return {
    fromTown,
    regList,
   warnMassages,
   checkReg
  
  
  };

}