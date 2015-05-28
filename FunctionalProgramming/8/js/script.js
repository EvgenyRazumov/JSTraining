(function() {
    function unfoldCallback(currentState) {
        if (currentState >= 0) {
             return {
                nextValue: Math.floor((Math.random() * 30) + 1),
                nextStateValue: currentState - 1
            };
        }
    }

    function sumCallback(prevValue, currentVal, index, array) {
        return currentVal;
    }

    var randomNumbers = FunctionalProgramming.unfold(unfoldCallback, 10);
    console.log("Sum of [" + randomNumbers + "]:");
    console.log(FunctionalProgramming.fold(randomNumbers, sumCallback));
})();