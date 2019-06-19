const thucDay = (lamgido) => {
    lamgido();
}

const danhRang = (lamgido) => {
    lamgido();
}
const anSang = (lamgido) => {
    lamgido();
}
const main = () => {
    thucDay(function() {

        danhRang(function() {
            anSang(function() {
                console.log("Code");
            })
        })
    })
}
main();