(function() {
    function sum(x, y, z) {
        var args = Array.prototype.slice.call(arguments);
        return args.reduce(function(a, b) {
            return a + b;
        });
    }
    console.log(FunctionalProgramming.curry(sum)(5)(2)(3));
})();