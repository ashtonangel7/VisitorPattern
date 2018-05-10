"use strict";
var Client = /** @class */ (function () {
    function Client(name, premium) {
        this._name = name;
        this._premium = premium;
    }
    Object.defineProperty(Client.prototype, "Name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "Premium", {
        get: function () {
            return this._premium;
        },
        enumerable: true,
        configurable: true
    });
    return Client;
}());
module.exports = Client;
