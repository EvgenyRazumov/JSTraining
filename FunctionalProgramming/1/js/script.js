(function() {
    function partial(x, f) {
        var args = Array.prototype.slice.call(arguments, 0, 1);
        return function() {
            var remainingArgs = Array.prototype.slice.call(arguments);
            return f.apply(null, args.concat(remainingArgs));
        }
    }

    function sum() {
        var args = Array.prototype.slice.call(arguments);
        return args.reduce(function(a, b) {
            return a + b;
        });
    }

    console.log(partial(5, sum)(4, 3));
})();