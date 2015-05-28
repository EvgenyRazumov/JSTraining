var FunctionalProgramming = FunctionalProgramming || { };

FunctionalProgramming.lazy = function(f, args) {
    return function() {
        return f.apply(null, args);
    }
}