import Client = require("./Client");
import BrokerVisitor = require("./BrokerVisitor");

class Broker {

	private readonly _name;
	private readonly _commision;

	private readonly _clients = new Array<Client>();
	private readonly _subBrokers = new Array<Broker>();

	constructor(name: string, commision: number) {
		this._name = name;
		this._commision = commision;
	}

	get Name(): string {
		return this._name;
	}

	get Comission(): number {
		return this._commision;
	}

	get SubBrokers() : Array<Broker> {
		return this._subBrokers;
	}

	AddClient(client: Client): void {
		this._clients.push(client);
	}

	AddSubBroker(broker: Broker): void {
		this._subBrokers.push(broker);
	}

	Accept(visitor: BrokerVisitor){ 
		visitor.Visit(this);
	}
}

export = Broker;