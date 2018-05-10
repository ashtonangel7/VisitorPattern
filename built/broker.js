"use strict";
var Broker = /** @class */ (function () {
    function Broker(name, commision) {
        this._clients = new Array();
        this._subBrokers = new Array();
        this._name = name;
        this._commision = commision;
    }
    Object.defineProperty(Broker.prototype, "Name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Broker.prototype, "Comission", {
        get: function () {
            return this._commision;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Broker.prototype, "SubBrokers", {
        get: function () {
            return this._subBrokers;
        },
        enumerable: true,
        configurable: true
    });
    Broker.prototype.AddClient = function (client) {
        this._clients.push(client);
    };
    Broker.prototype.AddSubBroker = function (broker) {
        this._subBrokers.push(broker);
    };
    Broker.prototype.Accept = function (visitor) {
        visitor.Visit(this);
    };
    return Broker;
}());
module.exports = Broker;
