"use strict";

var details = "";
var wordOnButton = "Show details";

var showDetails = function showDetails() {
    if (wordOnButton == "Show details") {
        wordOnButton = "Show less";
        details = "details";
    } else {
        wordOnButton = "Show details";
        details = "";
    }
    renderApp();
};

var appRoot = document.getElementById('app'); // can be put in ReactDOM.render...

var renderApp = function renderApp() {
    var template = //can use  other names other than template
    React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: showDetails },
            " ",
            wordOnButton,
            " "
        ),
        React.createElement(
            "p",
            null,
            details
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
