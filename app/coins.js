var butk = require("./coins/butk.js");
var btc = require("./coins/btc.js");
var ltc = require("./coins/ltc.js");
var pgn = require("./coins/pgn.js");

module.exports = {
	"BUTK": butk,
	"BTC": btc,
	"LTC": ltc,
	"PGN": pgn,

	"coins":["BUTK", "BTC", "LTC", "PGN"]
};