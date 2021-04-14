const http = require("http");

http
	.createServer((req, res) => {
		res.writeHead(200, { "Content-Type": "text/html" });

		switch (req.url) {
			case "/":
				res.end("server running!");
				break;

			case "/test2":
				break;

			default:
				res.end("no such route exists");
				break;
		}
	})
	.listen(3001);
