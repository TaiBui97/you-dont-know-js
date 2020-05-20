class Calcu {
    constructor(calCu, numberA, numberB) {
        this.calCu = calCu;
        this.numberA = numberA;
        this.numberB = numberB;
    }
    _getStringCal() {
        const { calCu, numberA, numberB } = this;
        if (calCu === 'SUM')
            return `${numberA} + ${numberB}`;
        if (calCu === 'SUB')
            return `${numberA} - ${numberB}`;
        if (calCu === 'MUL')
            return `${numberA} * ${numberB}`;
        return `${numberA} / ${numberB}`;

    }
    _getResultCal() {
        const calcuString = this._getStringCal();
        const result = eval(calcuString);
        return `${calcuString} = ${result}`
    }
}
module.exports = Calcu;