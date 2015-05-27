var FunctionalProgramming = FunctionalProgramming || { };

FunctionalProgramming.first = function(array, callback) {
    for (var i = 0; i < array.length; i++) {
        var currentItem = array[i];
        if (callback(currentItem)) {
            return currentItem;
        }
    }
}