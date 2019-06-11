const printString = (str, callback) => {
    console.log(`string: ... ${str}`)
    callback();
}


const printAll = () => {
    printString('MERN', () => {
        printString('STACK', function() {
            printString('0106', function() {
                printString('...', () => {
                    printString('...', () => {
                        printString('...', () => {
                            printString('...', () => {
                                printString('...', () => {
                                    console.log(`....`);
                                });
                            });
                        });
                    });
                });
            });
        })
    })
}

printAll();