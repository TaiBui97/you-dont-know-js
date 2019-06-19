//Promise (neu dung thi tra ve, neu sai tra ve tai day)
//.then de hung gia tri tra ve neu DUNG cua resolve
//.catch de hung gia tri tra ve neu SAI cua reject 

const printStringPromise = (a, b) => {
    return new Promise((resolve, reject) => {
        if ((a + b) % 2 == 0) {
            console.log('Even number');
            return resolve('Even numberr')
        }
        console.log('Odd number');
        return reject('Odd numberr');
    })
}
const callAllPrintString = () => {
        printStringPromise(2, 2)
            .then(() => printStringPromise(2, 2))
            .then(() => printStringPromise(2, 2))
            .then(() => printStringPromise(2, 2))
            .then(success => console.log({ success })) // tra ve gia tri resolve da return
            .catch(err => console.log({ err })) //// tra ve gia tri reject da return


    }
    //callAllPrintString();
const callbackDemo = (number1, number2, result) => {
    if ((number1 + number2) % 2 === 0)
        return result('ODD')
    return result('EVEN')
}
const convertCallBackToPromise = (number1, number2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            callbackDemo(number1, number2, message => {
                if (Object.is(message, 'ODD'))
                    return reject({ message: 'convert promise odd' })
                return resolve({ message: 'convert promise even' })

            })
        }, 1000)

    })
}
console.log(convertCallBackToPromise(2, 3)) // thuc thi bat dong bo nen phai cho no co ket qua tra ve moi dc goi, neu khong se undefind hoac pending

convertCallBackToPromise(2, 2)
    .then(rst => console.log({ rst }))
    .catch(rst => console.log({ rst }))