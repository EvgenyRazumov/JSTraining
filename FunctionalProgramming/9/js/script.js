(function() {
    function callback(item) {
        return item.id == 32;
    }
    var array = [{ id: 12, name: "name_12" },
                { id: 22, name: "name_22" },
                { id: 32, name: "name_32" },
                { id: 42, name: "name_42" }];
    console.log(FunctionalProgramming.first(array, callback));
})();