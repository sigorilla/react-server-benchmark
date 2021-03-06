process.env.NODE_ENV = 'production';

var ITERATION_COUNT = 100;
var CHILDREN_COUNT = 100;

var React = require('react');
var ReactDOMServer = require('react-dom/server');

var ReactRender = require('fast-react-render');

var ReactServer = require('fast-react-server');

var dataSet = require('./generate-data')(CHILDREN_COUNT);

var getListView = require('./source/list');

var callback1 = function (listView, dataSet) {
    var element = React.createElement(listView, dataSet);
    return ReactDOMServer.renderToString(element);
}.bind(this, getListView(React), dataSet);
console.log('Avarage time of React + ReactDOMServer: ' + test(callback1) + 'ms');

var callback2 = function (listView, dataSet) {
    var element = React.createElement(listView, dataSet);
    return ReactRender.elementToString(element);
}.bind(this, getListView(React), dataSet);
console.log('Avarage time of React + FastReactRender: ' + test(callback2) + 'ms');

var callback3 = function (listView, dataSet) {
    var element = ReactServer.createElement(listView, dataSet);
    return ReactRender.elementToString(element);
}.bind(this, getListView(ReactServer), dataSet);
console.log('Avarage time of FastReactServer + FastReactRender: ' + test(callback3) + 'ms');

function test(callback) {
    var sumTime = 0;

    for (var i = 0; i < ITERATION_COUNT; i++) {
        var start = process.hrtime();
        callback();
        sumTime += process.hrtime(start)[0] * 1000 + process.hrtime(start)[1] / 1000000;
    }

    return (sumTime / ITERATION_COUNT).toFixed(0);
}
