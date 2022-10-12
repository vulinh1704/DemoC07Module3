const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    let parseUrl = url.parse(req.url, true);
    let pathName = parseUrl.pathname;
    let trimPath = pathName.replace(/^\/+|\/+$/g, '');

    let chosenHandler;
    if (typeof router[trimPath] === "undefined") {
        chosenHandler = handler.notFound;
    } else {
        chosenHandler = router[trimPath];
    }
    chosenHandler(req, res);
});

server.listen(8080, () => {
    console.log("Server running")
})

let handler = {};


handler.home = (req, res) => {
    getTemplate(req, res , './views/index.html');
}

handler.notFound = (req, res) => {
    getTemplate(req, res, './views/notFound.html')
}

handler.css = (req, res) => {
    fs.readFile('./views/index.css', 'utf-8', (err, data) => {
        if (err) {
            console.log(err.message);
        }
        res.writeHead(200, "text/css");
        res.write(data);
        res.end();
    })
}

let getTemplate = (req, res, path) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            console.log(err.message);
        }
        res.writeHead(200, "text/html");
        res.write(data);
        res.end();
    })
}

let router = {
    'login': handler.login,
    'home': handler.home,
    'index.css': handler.css
}