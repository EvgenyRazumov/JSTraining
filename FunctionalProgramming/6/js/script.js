(function() {
    function callbackFunction(item) {
        return item > 10;
    }
    console.log(FunctionalProgramming.filter([1, 30, 52, 10, 11], callbackFunction));
})();