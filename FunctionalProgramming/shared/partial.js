var FunctionalProgramming = FunctionalProgramming || { };

FunctionalProgramming.partial = function(x, f) {
    var args = Array.prototype.slice.call(arguments, 0, 1);
    return function() {
        var remainingArgs = Array.prototype.slice.call(arguments);
        return f.apply(null, args.concat(remainingArgs));
    }
}