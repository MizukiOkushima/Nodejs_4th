# Nodejs_4th
Node.jsを使用してチャットアプリを作成する。<r>

### バージョンについて
Node.js v22.1.0<br>

#　環境構築
package.jsonファイルの生成<br>
`npm init -y`<br>
<br>
expressのインストール<br>
`npm install express`<br>
<br>
socket.ioのインストール<br>
`npm install socket.io`<br>
<br>
nodemonのインストール(グローバルインストール)<br>
`npm install -g nodemon`<br>
<br>
package.jsonのscriptsの編集<br>
"scripts": {
    "dev": "nodemon server.js"
}
<br>
