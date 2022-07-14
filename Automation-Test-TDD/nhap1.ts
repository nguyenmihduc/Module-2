
class FindNextDay {
    day: number;
    month: number;
    year: number;
    array31day: number[] = [1,3,5,7,8,10,12];
    array30day: number[] = [4,6,9,11];
    array28or29day: number[] = [2]
    maxDay: number;
    constructor(day: number, month: number, year: number) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    getMaxDay(): number {
        this.array31day.forEach((item) => {
            if(this.month == item) {
                this.maxDay = 31
            }
        })
        this.array30day.forEach((item) => {
            if(this.month == item) {
                this.maxDay = 30
            }
        })
        this.array28or29day.forEach((item) => {
            if(this.month == item && this.year%400 == 0) {
                this.maxDay = 29
            } else if (this.month == item) {
                this.maxDay = 28
            }
        })
        return this.maxDay
    }
    getNextDay(): number {
        this.getMaxDay()
        if (this.day == this.maxDay) {
            return 1;
        } else if (this.day < this.maxDay) {
            return this.day + 1;
        }
    }
    getNextMonth(): number {
        this.getMaxDay()
        if (this.day == this.maxDay && this.month == 12) {
            return 1;
        } else if (this.day == this.maxDay) {
            return this.month + 1;
        } else if (this.day < this.maxDay) {
            return this.month;
        }
    }
    getNextYear(): number {
        if (this.day == this.maxDay && this.month == 12) {
            return this.year + 1;
        } else {
            return this.year
        }
    }
    toString(): string {
        return `next day: ${this.getNextDay()} next month: ${this.getNextMonth()} next year: ${this.getNextYear()}`
    }
}

let nextDay1 = new FindNextDay(31,12,2002)
console.log(nextDay1.toString())

let nextDay2 = new FindNextDay(28,2,1987)
console.log(nextDay2.toString())

let nextDay3 = new FindNextDay(28,2,2000)
console.log(nextDay3.toString())

