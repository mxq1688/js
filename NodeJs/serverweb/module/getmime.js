

exports.getMime = function (cname) {
    var extname = '';
    switch (cname) {
        case '.html':
            extname = 'text/html';
            break;
        case '.css':
            extname = 'text/css';
            break;
        case '.js':
            extname = 'text/javascript';
            break;
        default:
            extname = 'text/html';
    }
    return extname;
}
