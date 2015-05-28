(function() {
    function callbackFunction(item) {
        return item * 10;
    }
    console.log(FunctionalProgramming.map([1, 3, 5], callbackFunction));
})();