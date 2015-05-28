var FunctionalProgramming = FunctionalProgramming || { };

FunctionalProgramming.map = function(array, callback) {
    var res = [];
    for (var i = 0; i < array.length; i++) {
        res.push(callback(array[i]));
    }
    return res;
}