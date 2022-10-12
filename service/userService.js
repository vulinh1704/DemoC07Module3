// const fs = require('fs');
// const qs = require('qs');
//
// const handlers = {};
//
// handlers.login = function (req, res) {
//
// };
//
// handlers.home = function (req, res) {
//     let usersHtml = '';
//     fs.readFile('./data/users.json', 'utf-8', (err, users) => {
//         users = JSON.parse(users);
//         users.forEach((item, index) => {
//             usersHtml += `${index + 1} : ${item.name} , ${item.password}<br>`
//         });
//         fs.readFile('./views/index.html', 'utf-8', (err, indexHtml) => {
//             res.writeHead(200, "text/html");
//             indexHtml = indexHtml.replace('{users}', usersHtml);
//             res.write(indexHtml);
//             res.end();
//         })
//     })
// };
//
// handlers.notFound = function (req, res) {
//     fs.readFile('./views/notFound.html', 'utf-8', (err, data) => {
//         res.writeHead(200, "text/html");
//         res.write(data);
//         res.end();
//     });
// };
//
// handlers.register = function (req, res) {
//     if (req.method === "GET") {
//         fs.readFile('./views/register.html', 'utf-8', (err, data) => {
//             res.writeHead(200, "text/html");
//             res.write(data);
//             res.end();
//         });
//     } else {
//         let data = '';
//         req.on('data', chunk => {
//             data += chunk;
//         });
//         req.on('end', () => {
//             let users = [];
//             const userInfo = qs.parse(data); // Object
//             fs.readFile('./data/users.json', 'utf-8', (err, usersJson) => {
//                 users = JSON.parse(usersJson);
//                 users.push(userInfo);
//                 users = JSON.stringify(users);
//                 fs.writeFile('./data/users.json', users, err => {
//                     console.log(err);
//                 });
//
//             })
//         })
//         res.writeHead(301, {'location' : '/home'});
//         res.end();
//     }
// };
//
// module.exports = handlers;

