"use strict";
var BrokerVisitor2 = /** @class */ (function () {
    function BrokerVisitor2() {
    }
    BrokerVisitor2.prototype.Visit = function (objectToVisit) {
        var _this = this;
        console.log("Im visitor 2 : " + objectToVisit.Name);
        objectToVisit.SubBrokers.map(function (subBroker) { subBroker.Accept(_this); });
    };
    return BrokerVisitor2;
}());
module.exports = BrokerVisitor2;
