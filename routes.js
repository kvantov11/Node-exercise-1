const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Vitaj zmrde</title></head>');
        res.write('<body><p>pakuj do pice</p></body>');
        res.write('<form action="/create-user" method="POST">')
        res.write('<input type="text" name="usernamee">');
        res.write('<button type="submit">Posli to sracko</button>');
        res.write('</form>');
        res.write('</html>');
        res.end();
        return;
    }

    if (url == '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>sracka</li>');
        res.write('<li>vole</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
        return;
    }

    if (url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });

        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
        return;
    }
}

exports.requestHandler = requestHandler;