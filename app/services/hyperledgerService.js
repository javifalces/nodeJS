/**
 * Created by XE61374 on 24/05/2017.
 */
// https://github.com/hyperledger/fabric-sdk-node/tree/v1.0.0-alpha.x/examples/balance-transfer

var hfc = require('fabric-sdk-node/fabric-client');
var utils = require('fabric-sdk-node/fabric-client/lib/utils.js');
var Peer = require('fabric-sdk-node/fabric-client/lib/Peer.js');
var Orderer = require('fabric-sdk-node/fabric-client/lib/Orderer.js');
var EventHub = require('fabric-sdk-node/fabric-client/lib/EventHub.js');

var config = require('./configFabric.json');

function connect()
{

};