let { DEMO_EX, VAR_EX, DEMOEXPORT } = require('./import-export-1');
str = "Demo Export :";
console.log(DEMO_EX(2, 1));
console.log({ VAR_EX });
console.log(`${str}${DEMOEXPORT(2, 3)}`);