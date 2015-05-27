var FunctionalProgramming = FunctionalProgramming || { };

FunctionalProgramming.curry = function(f) {
    var length = f.length;

    return function curryInternal(x) {
        var args = Array.prototype.slice.call(arguments, 0);
        if (args.length < length) {
            return function() {
                var args2 = Array.prototype.slice.call(arguments, 0);
                return curryInternal.apply(null, args.concat(args2)); 
            }
        }
        return f.apply(null, args);
    };
}