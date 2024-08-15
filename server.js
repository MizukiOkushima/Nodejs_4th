// expressの読み込み
const express = require("express");

// expressの使用
const app = express();

// httpモジュールの読み込み
const http = require("http");

// サーバーの作成
const server = http.createServer(app);

// socket.ioの呼び出し
// 代一引数 サーバーの指定
const io = require("socket.io")(server);

// ポートの指定
const PORT = 3000;

// 第一引数 ディレクトリの指定
app.get("/", (req, res) => {

    // reqとresを受け取って以下の処理を行う

    // ルートへアクセスしたときに文字を出力する
    // res.send("Hello world!!");

    // sendFile index.htmlをserver.jsで受け取る
    // 引数にパスを指定する
    // __dirname server.jsがある階層を指定できる
    res.sendFile(__dirname + "/index.html");

});

// socket.ioのコネクション
// index.htmlのio()にてインスタンス化されたことを読み取り処理が実行される
io.on("connection", (socket) => {
    console.log("ユーザーが接続しました。");

    // socket.on index.htmlから受け取る
    // chat messageはindex.htmlと合わせること
    socket.on("chat message", (msg) => {

        // console.log("メッセージ:" + msg);

        // emit クライアント側に送信する
        io.emit("chat message", msg);

    });
});

// サーバーをローカルで立ち上げる
server.listen(PORT, () => {
    console.log("listening on 3000");
});