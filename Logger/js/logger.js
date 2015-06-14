'use strict'

//define global variable
var devLogger = { };

(function() {
    //LogLevel
    var LogLevel = function(level, name) {
        this.level = level;
        this.name = name;
    }

    LogLevel.ALL = new LogLevel(0, "ALL");
    LogLevel.DEBUG = new LogLevel(1, "DEBUG");
    LogLevel.INFO = new LogLevel(2, "INFO");
    LogLevel.ERROR = new LogLevel(3, "ERROR");

    //Publishers
    var ConsolePublisher = function() {
        this.log = function(logEvent) {
            console.log(logEvent);
        }
    };

    var AlertPublisher = function() {
        this.log = function(logEvent) {
            alert(logEvent);
        }
    };

    var HtmlPublisher = function(container) {
        if (!container) {
            var body = document.body;
            container = document.createElement("div");
            body.appendChild(container);
        }

        this.log = function(logEvent) {
            var textnode = document.createElement("div");
            textnode.textContent = JSON.stringify(logEvent);
            container.appendChild(textnode); 
        }
    };

    var AjaxPublisher = function(url) {
        this.log = function(logEvent) {
            try {
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open("POST", url, false);
                xmlHttp.send(logEvent.asJson());
            } catch (exception) {
                console.log(exception);
            }
        }
    };

    //LogEvent
    var LogEvent = function(eventDate, logLevel, msg) {
        this.eventDate = eventDate;
        this.msg = msg;
        this.logLevel = logLevel;

        this.asJson = function() {
            return JSON.stringify(this);
        };

        //probably it's better to add separate implementation
        this.toString = this.asJson;
    }


    //Main logger
    var Logger = function(publisher) {
        var loggerPublisher = publisher;
        var loggerLevel = LogLevel.ALL;

        var isPublisherValid = function(p) {
            return (typeof p["log"]) == "function";
        };

        if (!loggerPublisher) {
            loggerPublisher = this.getDefaultPublisher();
        }
    
        this.log = function(eventLevel, params) {
            if (params.length == 0) {
                //show that message param is required
            }

            if (eventLevel >= loggerLevel) {
                //extract message from params
                var msg = params[0];
                var logEvent = new LogEvent(new Date(), eventLevel, msg);
                loggerPublisher.log(logEvent);
            }
        };

        this.setLevel = function(level) {
            loggerLevel = level;
        };

        this.getLevel = function() {
            return loggerLevel;
        };

        this.setPublisher = function(publisher) {
            if (!isPublisherValid(publisher)) {
                throw "Method log is not implemented in publisher!";
            }
            loggerPublisher = publisher;
        };

        //add unhandled exceptions handler
        (function(self) {
            window.onerror = function unhandledExceptionsHandler(errorMsg, url, lineNumber) {
                self.error(errorMsg);
            }
        })(this);
    };

    Logger.prototype = {
        constructor: Logger,
        error: function() {
            this.log(LogLevel.ERROR, arguments);
        },
        info: function() {
            this.log(LogLevel.INFO, arguments);
        },
        getDefaultPublisher: function() {
            return new ConsolePublisher();
        }
    }

    //extend devLogger
    devLogger.ConsolePublisher = ConsolePublisher;
    devLogger.AlertPublisher = AlertPublisher;
    devLogger.AjaxPublisher = AjaxPublisher;
    devLogger.HtmlPublisher = HtmlPublisher;
    devLogger.LogLevel = LogLevel;
    devLogger.getLogger = function(publisher) {
        return new Logger(publisher);
    };
    devLogger.addHandler = function(publisher) {
        return new Logger(publisher);
    }
})();