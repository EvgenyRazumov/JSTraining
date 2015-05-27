var FunctionalProgramming = FunctionalProgramming || { };

FunctionalProgramming.filter = function(array, callback) {
    var res = [];
    for (var i = 0; i < array.length; i++) {
        var currentItem = array[i];
        if (callback(currentItem)) {
            res.push(currentItem);
        }
    }
    return res;
}