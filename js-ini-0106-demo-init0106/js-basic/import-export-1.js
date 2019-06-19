let demoEx = function(a, b) {
    return a + b;
}

let varEx = 5;
let demoExport = (a, b) => a + b;
exports.DEMO_EX = demoEx;
exports.VAR_EX = varEx;
exports.DEMOEXPORT = demoExport;