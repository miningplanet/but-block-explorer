#### Pending Release

* Version number in footer
* `/changelog` linked in footer

#### v1.3.12
###### 2022-07-16

* Add ipstack - Free IP Geolocation API - https://ipstack.com
* Render OpenStreetMap map for peers view - https://www.openstreetmap.org
* Add configuration option for host in node status view
* Update shrinkwrap

#### v1.3.11
###### 2022-07-15

* Library updates marked@4.0.18 redis@4.2.0 helmet@3.23.3 meow@3.1.10 moment@2.29.4 qrcode@1.5.1 simple-git@3.10.0
* Fix fee currency format

#### v1.3.10
###### 2022-06-12

* Restore BTC coin configuration btc.js
* Add total transaction output to blocks table
* Change average fee to total fee in blocks table
* Fix load arbitrary number of blocks on blocks page
* Several small fixes
* Reflect Butkoin

#### v1.3.9
###### 2022-06-11

* Add link to changelog
* Fix block reward function and average fee calculation
* Library updates marked@4.0.16 redis@4.1.0 request@2.88.2 async@3.2.4 cookie-parser@1.4.6 less@4.1.3 express@4.18.1 express-rate-limit@6.4.0 express-session@1.17.3 body-parser@1.20.0 morgan@1.10.0 moment-duration-format@2.3.2 debug@4.3.4 crypto-js@4.1.1 decimal.js@10.3.1 csurf@1.11.0

#### v1.3.8
###### 2022-05-13

* Show current user currency in exchange rate widged for https://explorer.butkoin.com
* Update mining pools configuration
* Upgrade Butkoin archive node to But Core v1.3.0.1-70472e220

#### v1.3.7
###### 2022-05-10

* Add more configuration option for exchange rates for CNY, INR and RUB.
* Add redundant ElectrumX address API

#### v1.3.6
###### 2022-04-29

* Add configuration option for exchange rates data (default to https://api.butkoin.com/v1/butkoin/getcurrentprice) and extended to USD, EUR, JPY, GPB and BRL.
* Fix exchange rate widged for https://explorer.butkoin.com
* Fix layout

#### v1.3.5
###### 2022-04-27

* Fix last send / rec. and add ping for https://explorer.butkoin.com/peers 
* Fix layout

#### v1.3.4
###### 2022-03-31

* Add butkoin.com donation address XvrHWjw7zd4CQZkxbiZGt3dGE53vjrUGrs to footer
* Add ElectrumX address API

#### v1.3.3
###### 2022-02-16

* Add mining algorithm to blocks table
* Fix layout

#### v1.3.2
###### 2022-01-29

* Add total / max. amount widged for https://explorer.butkoin.com
* Fix total transactions for https://explorer.butkoin.com

#### v1.3.1
###### 2021-12-22

* Add butkoin.com CSS layout
* Fix null pointer for tx view.

#### v1.3.0
###### 2021-12-15

* Forked from https://github.com/Butkoin/but-block-explorer/ to https://github.com/miningplanet/but-block-explorer/
* Upgrade to nodejs v14.17.2 (LTS) npm 6.14.13
* Upgrade to redis 4
* Upgrade vulnerable modules
* Reflect Butkoin

#### v1.2.0
###### 2019-12-04

* Forked from https://github.com/Raptor3um/rpc-explorer to https://github.com/Butkoin/but-block-explorer/, last commit 498b350b62afb745500a7c32f141a2538337510b by @npq7721 and others.

#### v1.1.2 
###### 2019-10-17

* Add back map on `/peers` that was lost with recent bug

#### v1.1.1
###### 2019-10-01

* Add new default blacklist items for some 'hidden' RPCs
* Print app version info to log on startup
* Remove LTC site from footer

#### v1.1.0
###### 2019-09-30

* Show spent/unspent status on tx detail pages
* Show mempool ancestor/descendant txs on tx detail pages
* Blacklist 'createwallet' by default
* Show RBF status for unconfirmed txs
* Faster, more reliable display of `/mempool-summary` and `/unconfirmed-tx` pages
* Fix for persisting arg values in UI on `/rpc-browser`
* Misc minor fixes and ux tweaks

#### v1.0.3
###### 2019-04-27

* Pluggable address API supporting different implementations
* Logging improvements
* Fix to avoid caching unconfirmed txs
* Identify destroyed fees
* Misc minor fixes and ux tweaks

#### v1.0.2
###### 2019-03-13

* Fix for background color on light theme

#### v1.0.1
###### 2019-03-13

* Dark theme
* Tx rate graph on homepage
* Improved caching
* Misc minor fixes and ux tweaks

#### v1.0.0
###### 2019-02-23

* Initial release