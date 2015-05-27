var FunctionalProgramming = FunctionalProgramming || { };

FunctionalProgramming.unfold = function(callback, initialValue) {
    var res = [],
        currentState = initialValue,
        callbackRes;
    while (callbackRes = callback(currentState)) {
        res.push(callbackRes.nextValue);
        currentState = callbackRes.nextStateValue;
    }
    return res;
}