(function() {
    function callbackFunction(prevValue, currentVal, index, array) {
        return prevValue * currentVal + index + array.length;
    }
    console.log(FunctionalProgramming.fold([1, 2, 3, 4], callbackFunction, -1));
    console.log(FunctionalProgramming.fold([1, 2, 3, 4], callbackFunction));
})();