"use strict";
/* interface IVisitor<T> {
    Visit(objectToVisit: T): void;
} */
var BrokerVisitor = /** @class */ (function () {
    function BrokerVisitor() {
    }
    BrokerVisitor.prototype.Visit = function (objectToVisit) {
        var _this = this;
        console.log(objectToVisit.Name);
        objectToVisit.SubBrokers.map(function (subBroker) { subBroker.Accept(_this); });
    };
    return BrokerVisitor;
}());
module.exports = BrokerVisitor;
