// setTimeout(() => {
//     alert('Hello World');
// }, 1000);
$(document).ready(function() {
    const getUsers = async(uri, callback) => {
        fetch(uri)
            .then(resp => resp.json())
            .then(resp2 => {
                callback(resp2.results)
            })
    }

    const setUsers = users => {
            $(`#listUsers`).empty();
            users.forEach(user => {
                $(`#listUsers`).append(`
                <li>${user.email}</li>
                <li>${user.id.value}</li>

            `)
            })
        }
        // let numberRandom = Math.floor(Math.random() + (10 - 1 + 1) ) + 1 ;
    let numberRandom = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    getUsers(`https://randomuser.me/api?page=${numberRandom}&results=10`, setUsers);

    $('#btnReload').on('click', () => {
        let numberRandom = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        getUsers(`https://randomuser.me/api?page=${numberRandom}&results=10`, setUsers);
    })
})