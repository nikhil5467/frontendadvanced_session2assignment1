function person(name) {
    this.name = name;
}
person.prototype.prefixArray = function (arr) {
    return arr.map((character) => {
        return this.name + character;
    });
};