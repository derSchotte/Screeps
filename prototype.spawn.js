module.exports = function() {
    StructureSpawn.prototype.createCustomCreep = function(energy, roleName) {
        var numberOfParts = Math.floor(energy / 200);
        var body = [];
        
        for (let i = 0; i < numberOfParts; i++) {
            body.push(WORK);
        };
        for (let i = 0; i < numberOfParts; i++) {
            body.push(CARRY);
        };
        for (let i = 0; i < numberOfParts; i++) {
            body.push(MOVE);
        };
        
        /* for (let w = 0; w < numberOfParts; w++) {
            body.push(WORK);
            
            for (let c = 0; c < numberOfParts; c++) {
                body.push(CARRY);
                
                for (let m = 0; m < numberOfParts; m++) {
                    body.push(MOVE);
                };
            };
        }; */
        
        return this.createCreep(body, undefined, { role: roleName, working: false});
    };
};