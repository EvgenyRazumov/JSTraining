(function() {
    function foldCallback(prevValue, currentVal, index, array) {
        return currentVal / array.length;
    }

    function filterCallback(item) {
        return item % 2 == 0;
    }

    var evenNumbers = [1, 23, 2, 6, 12, 0];
    console.log("Average of even numbers [" + evenNumbers +"]:");
    console.log(FunctionalProgramming.fold(FunctionalProgramming.filter(evenNumbers, filterCallback), foldCallback));
})();