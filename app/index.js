var component = require('./board/board');
var app = document.createElement('div');
require('./styles/board.css')

document.body.appendChild(app);
app.appendChild(component());
