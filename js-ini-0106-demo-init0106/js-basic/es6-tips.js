const infoUser = {
    username: 'abc',
    password: 'avc_pwd',
    password2: 'avc_pwd2',
    password3: 'avc_pwd3',
    id: 123
}
let usernameUser = infoUser['username'];
let usernameUser2 = infoUser['password'];
let usernameUser3 = infoUser['password2'];
let usernameUser4 = infoUser['password3'];

//--es6 khoi tao va goi cac doi tuong trong construtor va có thể đặt lại tên biến nếu nó không tường minh eg: id bên dưới
const { username, password, id: userID } = infoUser;
console.log({ username, password, userID });
const str = '1+1';
console.log(str); // 1 +1
console.log(eval(str)); // 2 => eval se nhung doi so la number.