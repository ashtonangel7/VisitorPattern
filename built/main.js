"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client = require("./Client");
var Broker = require("./Broker");
var BrokerVisitor = require("./BrokerVisitor");
var rootBroker = new Broker("RootBroker", 10);
var subBroker = new Broker("SubBroker", 5);
var subBroker1 = new Broker("SubBroker1", 2);
var client1 = new Client("Ashton", 250);
var client2 = new Client("Bob", 300);
var client3 = new Client("Dave", 150);
subBroker.AddClient(client1);
subBroker.AddClient(client2);
rootBroker.AddClient(client3);
subBroker.AddSubBroker(subBroker1);
rootBroker.AddSubBroker(subBroker);
var brokerVisitor = new BrokerVisitor();
brokerVisitor.Visit(rootBroker);