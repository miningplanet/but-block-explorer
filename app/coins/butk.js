var Decimal = require("decimal.js");
var Decimal8 = Decimal.clone({ precision:8, rounding:8 });

var currencyUnits = [
	{
		type:"native",
		name:"BUTK",
		multiplier:"1",
		default:true,
		values:["", "butk", "BUTK"],
		decimalPlaces:8
	},
	{
		type:"exchanged",
		name:"USD",
		multiplier:"usd",
		values:["usd"],
		decimalPlaces:3,
		symbol:"$"
	},
	{
		type:"exchanged",
		name:"EUR",
		multiplier:"eur",
		values:["eur"],
		decimalPlaces:3,
		symbol:"€"
	},
	{
		type:"exchanged",
		name:"CNY",
		multiplier:"cny",
		values:["cny"],
		decimalPlaces:2,
		symbol:"元"
	},
	{
		type:"exchanged",
		name:"INR",
		multiplier:"inr",
		values:["inr"],
		decimalPlaces:2,
		symbol:"₹"
	},
	{
		type:"exchanged",
		name:"JPY",
		multiplier:"jpy",
		values:["jpy"],
		decimalPlaces:3,
		symbol:"¥"
	},
	{
		type:"exchanged",
		name:"GBP",
		multiplier:"gbp",
		values:["gpb"],
		decimalPlaces:3,
		symbol:"£"
	},
	{
		type:"exchanged",
		name:"RUB",
		multiplier:"rub",
		values:["rub"],
		decimalPlaces:2,
		symbol:"₽"
	},
	{
		type:"exchanged",
		name:"BRL",
		multiplier:"brl",
		values:["brl"],
		decimalPlaces:3,
		symbol:"R$"
	}
];

module.exports = {
	name:"Butkoin",
	ticker:"BUTK",
	logoUrl:"/img/logo/butk.svg",
	siteTitle:"Butkoin Explorer",
	siteDescriptionHtml:"<b>BUTK Explorer</b> is <a href='https://github.com/miningplanet/but-block-explorer). If you run your own [Butkoin Full Node](https://bitcoin.org/en/full-node), **BUTK Explorer** can easily run alongside it, communicating via RPC calls. See the project [ReadMe](https://github.com/miningplanet/but-block-explorer) for a list of features and instructions for running.",
	nodeTitle:"Butkoin Full Node",
	nodeUrl:"https://butkoin.com",
	demoSiteUrl: "https://butkoin.com",
	miningPoolsConfigUrls:[
		"https://raw.githubusercontent.com/btccom/Blockchain-Known-Pools/master/pools.json",
		"https://raw.githubusercontent.com/blockchain/Blockchain-Known-Pools/master/pools.json"
	],
	maxBlockWeight: 4000000,
	targetBlockTimeSeconds: 600,
	currencyUnits:currencyUnits,
	currencyUnitsByName:{"BUTK":currencyUnits[0]},
	baseCurrencyUnit:currencyUnits[0],
	defaultCurrencyUnit:currencyUnits[0],
	feeSatoshiPerByteBucketMaxima: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 50, 75, 100, 150],
	genesisBlockHash: "001787e5f9c3cd249f84f0142071f6098d9e3b7ec8591ff73543ddc4900c1dc2",
	genesisCoinbaseTransactionId: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
	genesisCoinbaseTransaction: {
		"hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0804ffff001d02fd04ffffffff0100f2052a01000000434104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac00000000",
		"txid": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
		"hash": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
		"size": 204,
		"vsize": 204,
		"version": 1,
		"confirmations":475000,
		"vin": [
			{
				"coinbase": "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
				"sequence": 4294967295
			}
		],
		"vout": [
			{
				"value": 50,
				"n": 0,
				"scriptPubKey": {
					"asm": "04f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446a OP_CHECKSIG",
					"hex": "4104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac",
					"reqSigs": 1,
					"type": "pubkey",
					"addresses": [
						"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
					]
				}
			}
		],
		"blockhash": "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
		"time": 1230988505,
		"blocktime": 1230988505
	},
	genesisCoinbaseOutputAddressScripthash:"8b01df4e368ea28f8dc0423bcf7a4923e3a12d307c875e47a0cfbf90b5c39161",
	historicalData: [
		{
			type: "blockheight",
			date: "2022-01-20",
			blockHeight: 0,
			blockHash: "001787e5f9c3cd249f84f0142071f6098d9e3b7ec8591ff73543ddc4900c1dc2",
			summary: "The Butkoin Genesis Block.",
			alertBodyHtml: "This is the first block in the Butkoin blockchain, known as the 'Genesis Block'. This block was mined by Butkoin's creator butkoinc. You can read more about <a href='https://en.bitcoin.it/wiki/Genesis_block'>the genesis block</a>.",
			referenceUrl: "https://en.bitcoin.it/wiki/Genesis_block"
		},
		{
			type: "tx",
			date: "2022-01-20",
			txid: "c083fb7c3b6936c15dc2685a522ffa685247e8c665c818888b51b0771584d7b4",
			summary: "The coinbase transaction of the Genesis Block.",
			alertBodyHtml: "This transaction doesn't really exist! This is the coinbase transaction of the <a href='/block/001787e5f9c3cd249f84f0142071f6098d9e3b7ec8591ff73543ddc4900c1dc2'>Butkoins Genesis Block</a>. For more background about this special-case transaction, you can read <a href='https://github.com/bitcoin/bitcoin/issues/3303'>this brief discussion</a> among some of the <a href='https://butkoin.com'>Butkoin</a> developers.",
			referenceUrl: "https://github.com/bitcoin/bitcoin/issues/3303"
		}
	],
	relatedSites : [
		{name: "Butkoin Orig.", url:"https://butcoin.tech", imgUrl:"/img/logo/butk.svg"},
		{name: "Butkoin Orig. Explorer", url:"https://blocks.butcoin.tech", imgUrl:"/img/logo/butk.svg"},
		{name: "Butkoin Announcements.", url:"https://bitcointalk.org/index.php?topic=5331748", imgUrl:"/img/logo/butk.svg"},
		{name: "ChangeLog", url:"https://explorer.butkoin.com/changelog", imgUrl:"/img/logo/butk.svg"},
	],
	exchangeRateData:{
		jsonUrl:"https://api.butkoin.com/v1/butkoin/getcurrentprice",
		responseBodySelectorFunction:function(responseBody) {
			var exchangedCurrencies = ["USD", "EUR", "CNY", "INR", "JPY", "GBP", "RUB", "BRL"];

			if (responseBody.rates) {
				var exchangeRates = {};

				for (var i = 0; i < exchangedCurrencies.length; i++) {
					if (responseBody.rates[exchangedCurrencies[i]]) {
						exchangeRates[exchangedCurrencies[i].toLowerCase()] = responseBody.rates[exchangedCurrencies[i]].rate_float;
					}
				}

				return exchangeRates;
			}
			
			return null;
		}
	},
	blockRewardFunction:function(blockHeight) {
		return new Decimal8(5000);

	}
};
