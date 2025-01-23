var Sorter = /** @class */ (function () {
    function Sorter(data) {
        this.data = data;
    }
    Sorter.prototype.sortData = function () {
        return this.data.sort();
    };
    return Sorter;
}());
var strings = new Sorter(["a", "b", "c", "d"]);
var numbers = new Sorter([1, 7, 2, 4, 9, 6]);
console.log(numbers.sortData());
