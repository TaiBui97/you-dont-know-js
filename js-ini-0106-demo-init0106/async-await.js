const fakePromise1 = a => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            return a % 2 === 0 ? resolve('TRUE') : reject('FALSE');
        },3000)
    })
}
const fakePromise2 = () => {
    return new Promise(resolve =>{
        setTimeout(() => {
            return resolve('Hello fake promise 2');
        },2000)
    })
}

const runAll = () => {
    fakePromise2()
        .then(message2 => console.log(`${message2}`))
        .catch(err => console.log(`${err}`))
    fakePromise1(2)
        .then(message1 => console.log(`${message1}`));
    
}
 //runAll();

//dung async await de chay {dong bo} theo tung function
const runnAllWithAsyncAwait = async () => {
   // let resultFakePromise2 = await fakePromise1();
  //  let resultFakePromise1 = await fakePromise1(1);

    try{
        let asyncFakePromise1 = fakePromise1(2);
        let asyncFakePromise2 = fakePromise2();
        //dung promise all khi 2 function khong phu thuoc doi so dau vao cua nhau(chay {bat dong bo}) //thoi gian cua no la thoi gian function chay dai nhat.(chay song song nhieu function thi thoi gian function dai nhat la thoi gian cua no)
        let [ resultFakePromise1, resultFakePromise2] = await Promise.all([asyncFakePromise1, asyncFakePromise2]);
        console.log({resultFakePromise1, resultFakePromise2})   
    }catch(err){
        console.log({err})
    }
}
//runnAllWithAsyncAwait();

//IIFE
(async function runWithPromiseRace(){
    let asyncFakePromise1 = fakePromise1(2);
    let asyncFakePromise2 = fakePromise2();
    //race de loai bo nhung function co request timeout dai
    let resultBestTime = await Promise.race([asyncFakePromise1, asyncFakePromise2]);
    console.log({resultBestTime});
})();