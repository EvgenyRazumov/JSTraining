var FunctionalProgramming = FunctionalProgramming || { };

FunctionalProgramming.memoization = function(f) {
    var memo = { },
        argsLength = f.length;
    return function() {
        var key = Array.prototype.slice.call(arguments, 0, argsLength);
        if (key in memo) {
            console.log("return from cache");
        } else {
            console.log("calculate function");
            memo[key] = f.apply(null, Array.prototype.slice.call(arguments, 0));
        }
        return memo[key];
    }
}