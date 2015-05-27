(function() {
    function someFunction(x, y, z) {
        return x + y + z;
    }
    var memoizationFunction = FunctionalProgramming.memoization(someFunction);
    console.log(memoizationFunction(1, 2, 3));
    console.log(memoizationFunction(2, 3, 3));
    console.log(memoizationFunction(1, 2, 3));
    console.log(memoizationFunction(1, 2, 3, 5));
    console.log(memoizationFunction(1, 2));
    console.log(memoizationFunction(1, 2));
})();