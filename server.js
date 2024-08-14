// expressの読み込み
const express = require("express");

// expressの使用
const app = express();

// httpモジュールの使用
const http = express("http");

// サーバーの作成
const server = http.createServer(app);

// socket.ioの呼び出し
// 代一引数 サーバーの指定
const io = require("socket.io")(server);

// ポートの指定
const PORT = 3000;

// 第一引数 パスの指定

app.get("/", (req, res) => {
    
});

// サーバーをローカルで立ち上げる
server.listen(PORT, () => {
    console.log("listening on 3000");
});