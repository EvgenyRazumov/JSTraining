(function() {
    function callbackFunction(currentState) {
        if (currentState > 0)
            return {
                nextValue: currentState,
                nextStateValue: currentState - 1
            };
        return false;
    }
    console.log(FunctionalProgramming.unfold(callbackFunction, 8));
})();