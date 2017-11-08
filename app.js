/*jslint node: true*/

/*global require, process, console*/
/*eslint no-console: ["error", { allow: ["warn", "error"] }] */


const express = require('express');
const app = express();

const path = require('path');

const SERVER_PORT = 3000;

//app.set("view options", {layout: false});
//app.use(express.static(__dirname + '/views'));

//ejs html render
// HTML 위치 정의
app.set('views', path.join(__dirname, 'views'));
// HTML 렌더링 EJS 엔진 사용
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


//router
const router = require('./routers/main');
app.use('/', router);


const server = app.listen(SERVER_PORT, () => {
    console.log(`Express server has started on port ${SERVER_PORT}`);
});

// 정적파일 CSS
app.use(express.static('public'));


