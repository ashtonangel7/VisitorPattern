class Client {

	private readonly _name;
	private readonly _premium;

	constructor(name: string, premium: number) {
		this._name = name;
		this._premium = premium;
	}

	get Name(): string {
		return this._name;
	}

	get Premium(): number {
		return this._premium;
	}
}

export = Client;