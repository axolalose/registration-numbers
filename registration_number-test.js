describe ("regNumber", function(){
    it("Should return registration number from Bellvile",function(){
        var numberReg = regNumber();
        numberReg.regTown("CY 214 2455");
        assert.deepEqual([],  numberReg.regTown()); 
    })

    it("Should return not valid registration if the is two towns entered",function(){
        var numberReg = regNumber();
        numberReg.regTown("CA 325 5254");
        numberReg.regTown("CW 251 6356");
        numberReg.regTown("CY 214 2455");
        assert.deepEqual([],  numberReg.regTown()); 
    })
    it("Should return registration number from Cape Town",function(){
        var numberReg = regNumber();
        numberReg.regTown("CA 236 3255");
        assert.deepEqual([],  numberReg.regTown()); 
    })
    it("Should return registration number from Malmesbury",function(){
        var numberReg = regNumber();
        numberReg.regTown("CW 566 6566");
        assert.deepEqual([],  numberReg.regTown()); 
    })
    it("Should return empty object if the is no registration and town entered",function(){
        var numberReg = regNumber();
        numberReg.regTown(" ");
        assert.deepEqual([],  numberReg.regTown()); 
    })

    describe('', () => {
        const regex =  /([A-Z]{2}\s[0-9]{3}\s[0-9]{3})$/;
        it('return true for valid', () => {
            assert.equal(true, regex.test('CA 123 333'))
        })

        it('return true for valid', () => {
            assert.equal(true, regex.test('CA 123 330'))
        })

        it('return false for valid', () => {
            assert.equal(false, regex.test('CA 123 FFFF'))
        })

        it('return false for valid', () => {
            assert.equal(false, regex.test('CA 123 333 88888'))
        })
    })

})