function CreateObject(arr) {
    // Write your code here
    result = [];
    chunkSize = 2;
    while(arr.length){
        result.push(arr.splice(0,chunkSize));
    }
    var personObject = {};
    result.forEach(element => {
        var key = element.split(',')[0];
        var value = element.split(',')[1];
        personObject[key] = value;
    });
    return personObject;
}
console.log(CreateObject(["firstName" , "Yash" , "lastName" , "Goyal"]));

module.exports = CreateObject;