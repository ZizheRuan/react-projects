'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

var app = {
    title: 'Some Title',
    subtitle: 'my subtitle',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); //stop page whole-refresh
    var option = e.target.elements.option.value;
    console.log(option);
    if (option) {
        app.options.push(option); //push into array;
        e.target.elements.option.value = '';
        //reset the new comer array to empty array.
    }
    renderApp();
};

var removeAll = function removeAll() {
    app.options = [];
    console.log('removed all options!');
    renderApp();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length); //0-1
    var option = app.options[randomNum];
    alert(option);
};

var appRoot = document.getElementById('app');

var numbers = [55, 101, 1000];

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle,
            ':'
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options',
            ':'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length == 0, onClick: onMakeDecision },
            ' What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        numbers.map(function (number) {
            return React.createElement(
                'p',
                { key: number },
                ' Number:',
                number,
                ' '
            );
        }),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    ' Option:',
                    option,
                    ' '
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
