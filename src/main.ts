import Client = require("./Client");
import Broker = require("./Broker");
import BrokerVisitor = require("./BrokerVisitor");

let rootBroker = new Broker("RootBroker", 10);
let subBroker = new Broker("SubBroker", 5);
let subBroker1 = new Broker("SubBroker1", 2);

let client1 = new Client("Ashton", 250);
let client2 = new Client("Bob", 300);
let client3 = new Client("Dave", 150);

subBroker.AddClient(client1);
subBroker.AddClient(client2);

rootBroker.AddClient(client3);
subBroker.AddSubBroker(subBroker1);
rootBroker.AddSubBroker(subBroker);

let brokerVisitor = new BrokerVisitor();
brokerVisitor.Visit(rootBroker);





