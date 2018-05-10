import { IVisitor } from "./IVisitor";
import Broker = require("./Broker");

class BrokerVisitor implements IVisitor<Broker> {
	constructor() { }
	Visit(objectToVisit: Broker): void {
		console.log(objectToVisit.Name);
		objectToVisit.SubBrokers.map((subBroker) => { subBroker.Accept(this) });
	}
}

export = BrokerVisitor;