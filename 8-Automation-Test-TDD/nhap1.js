var FindNextDay = /** @class */ (function () {
    function FindNextDay(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.array31day = [1, 3, 5, 7, 8, 10, 12];
        this.array30day = [4, 6, 9, 11];
        this.array28or29day = [2];
    }
    FindNextDay.prototype.getMaxDay = function () {
        var _this = this;
        this.array31day.forEach(function (item) {
            if (_this.month == item) {
                _this.maxDay = 31;
            }
        });
        this.array30day.forEach(function (item) {
            if (_this.month == item) {
                _this.maxDay = 30;
            }
        });
        this.array28or29day.forEach(function (item) {
            if (_this.month == item && _this.year % 400 == 0) {
                _this.maxDay = 29;
            }
            else if (_this.month == item) {
                _this.maxDay = 28;
            }
        });
        return this.maxDay;
    };
    FindNextDay.prototype.getNextDay = function () {
        this.getMaxDay();
        if (this.day == this.maxDay) {
            return 1;
        }
        else if (this.day < this.maxDay) {
            return this.day + 1;
        }
    };
    FindNextDay.prototype.getNextMonth = function () {
        this.getMaxDay();
        if (this.day == this.maxDay && this.month == 12) {
            return 1;
        }
        else if (this.day == this.maxDay) {
            return this.month + 1;
        }
        else if (this.day < this.maxDay) {
            return this.month;
        }
    };
    FindNextDay.prototype.getNextYear = function () {
        if (this.day == this.maxDay && this.month == 12) {
            return this.year + 1;
        }
        else {
            return this.year;
        }
    };
    FindNextDay.prototype.toString = function () {
        return "next day: ".concat(this.getNextDay(), " next month: ").concat(this.getNextMonth(), " next year: ").concat(this.getNextYear());
    };
    return FindNextDay;
}());
var nextDay1 = new FindNextDay(31, 12, 2002);
console.log(nextDay1.toString());
var nextDay2 = new FindNextDay(28, 2, 1987);
console.log(nextDay2.toString());
var nextDay3 = new FindNextDay(28, 2, 2000);
console.log(nextDay3.toString());
