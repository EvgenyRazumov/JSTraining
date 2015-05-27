(function() {
    function sum(x, y, z) {
        var args = Array.prototype.slice.call(arguments);
        return args.reduce(function(a, b) {
            return a + b;
        });
    }

    function curry(f) {
        var argsLength = f.length,
            args = [],
            callNumber = 0;

        return function(x) {
            debugger;
            args.push(x);
            callNumber++;
            if (callNumber < argsLength){
                return this;
            }
            return f.apply(null, args);
        };
    }

    curry(sum)(1)(2)(3);
})();