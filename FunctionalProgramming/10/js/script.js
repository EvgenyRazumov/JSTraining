(function() {
    function sumFunction(x, y, z) {
        return x + y + z;
    }
    var f = FunctionalProgramming.lazy(sumFunction, [4, 6, 7]);
    console.log(f());
})();