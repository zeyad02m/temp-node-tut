const http = require("http");
// const { server } = require('typescript');

const server = http.createServer((req, res) => {
  if (req.url === "./") {
    res.end("welcome to our page");
  }
  if (req.url === "./about") {
    res.end("here is our short histroy");
  }
  res.end(`
        <html>
<title> fuck u </title>
       <body>
        <h1>Oops</h1>
        <p> we can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        </body>

        </html>
    `);
});
const PORT = 5000;
server.listen(PORT, () =>
  console.log(`server is running on port: ${PORT} 
    http://localhost:${PORT}
    `)
);
