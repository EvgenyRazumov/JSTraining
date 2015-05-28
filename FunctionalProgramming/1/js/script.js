(function() {
    function sum() {
        var args = Array.prototype.slice.call(arguments);
        return args.reduce(function(a, b) {
            return a + b;
        });
    }
    console.log("Sum of [5,4,3] is " + FunctionalProgramming.partial(5, sum)(4, 3));
})();