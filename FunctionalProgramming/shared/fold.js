var FunctionalProgramming = FunctionalProgramming || { };

FunctionalProgramming.fold = function(array, callback, initialValue) {
    var res,
        currentValue,
        prevValue = initialValue;
    for (var i = 0; i < array.length; i++) {
        currentVal = array[i];
        if (res == null) {
            res = callback(prevValue, currentVal, i, array);
        } else {
            res += callback(prevValue, currentVal, i, array);
        }

        prevValue = currentVal;
    }
    return res;
}