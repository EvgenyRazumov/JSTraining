(function() {
    //some tests here
    var logger = devLogger.getLogger();
    logger.error("Error which should be logged");
    logger.info("Info which should be logged");

    logger.setLevel(devLogger.LogLevel.INFO);
    logger.error("Error which shouldn't be logged");
    logger.info("Info which should be logged");

    logger.setLevel(devLogger.LogLevel.ALL);
    logger.setPublisher(new devLogger.AjaxPublisher("http://localhost:1456"));
    logger.error("Some error sent using AjaxPublisher");

    logger.setPublisher(new devLogger.HtmlPublisher());
    logger.error("Some error using HtmlPublisher without container");

    logger.setPublisher(new devLogger.HtmlPublisher(document.getElementById("html-error-container")));
    logger.error("Some error using HtmlPublisher placed into predefined container");
    logger.info("Some info using HtmlPublisher placed into predefined container");

    logger.setPublisher(new devLogger.AlertPublisher());
    logger.error("Some error using AlertPublisher");

    logger.setPublisher(new devLogger.ConsolePublisher());
    kljhsdklfjhas();
})();
