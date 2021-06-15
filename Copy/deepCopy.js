let deepClone = function (obj) {
    let copy = Object.create(Object.getPrototypeOf(obj));
    let propNames = Object.getOwnPropertyNames(obj);
    propNames.forEach(function (items) {
        let item = Object.getOwnPropertyDescriptor(obj, items);
        Object.defineProperty(copy, items, item);

    });
    return copy;
};

let testObj = {
    name: "weiqiujuan",
    sex: "girl",
    age: 22,
    favorite: "play",
    family: {brother: "wei", mother: "haha", father: "heihei"}
}
let testRes2 = deepClone(testObj);
testObj.name='mxq'
console.log(testRes2);