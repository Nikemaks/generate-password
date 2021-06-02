export class ModelOptionPassword {
    constructor({
                    lengthPassword,
                    includesUppercaseLetters,
                    includesLowercaseLetters,
                    includesNumbers,
                    includesSymbols
                }) {
        this.lengthPassword = lengthPassword;
        this.includesUppercaseLetters = includesUppercaseLetters;
        this.includesLowercaseLetters = includesLowercaseLetters;
        this.includesNumbers = includesNumbers;
        this.includesSymbols = includesSymbols;
    }

    set(field, value) {
        return this[field] = value;
    }

    get(attr) {
        return this[attr];
    }

    toJSON() {
        return {
            lengthPassword: this.lengthPassword,
            includesUppercaseLetters: this.includesUppercaseLetters,
            includesLowercaseLetters: this.includesLowercaseLetters,
            includesNumbers: this.includesNumbers,
            includesSymbols: this.includesSymbols
        };
    }
}
