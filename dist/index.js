"use strict";

var _express = _interopRequireDefault(require("express"));

var _productos = _interopRequireDefault(require("./productos"));

var _path = _interopRequireDefault(require("path"));

var _read = _interopRequireDefault(require("./routes/read.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import routerSave from './routes/save.js';
var app = (0, _express["default"])();
var puerto = 8080;
var server = app.listen(puerto, function () {
  return console.log('Server up en puerto', puerto);
});
server.on('error', function (err) {
  console.log('ERROR ATAJADO', err);
});

var publicPath = _path["default"].resolve(__dirname, '../public');

app.use(_express["default"]["static"](publicPath));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use('/api', _read["default"]);