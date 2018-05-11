import { IVisitor } from "./IVisitor";
import Broker = require("./Broker");

class BrokerVisitor2 implements IVisitor<Broker> {
	constructor() { }
	Visit(objectToVisit: Broker): void {
		console.log(`Im visitor 2 : ${objectToVisit.Name}`);
		objectToVisit.SubBrokers.map((subBroker) => { subBroker.Accept(this) });
	}
}

export = BrokerVisitor2;