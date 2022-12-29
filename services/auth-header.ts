export default function authHeader() {
    console.log(' auth started');
    const user = JSON.parse(localStorage.getItem('user') as string);
    if (user && user.token) {
        console.log('token exist');
        return { Authorization: 'Bearer ' + user.token };

    } else {
        console.log('no token ');
        return {
        };
    }
}


// export default function authHeader() {
//     let user = JSON.parse(localStorage.getItem('user'));
//     if (user && user.accessToken) {
//       // for Node.js Express back-end
//       return { 'x-access-token': user.accessToken };
//     } else {
//       return {};
//     }
//   }