'use strict';
const apiClient = require('../api_client');

var model = {};

model.getAll = function (successCb, failCb) {
    var options = {};
    return apiClient.getAllNotes(options, successCb);
};

model.getSingle = function (id, successCb, failCb) {
    var options = {};
    options.uriParams = {id: id};
    return apiClient.getSingleNote(options, successCb, failCb);
};

model.createNew = function (title, successCb, failCb) {
    var options = {};
    options.body = {title: title};
    return apiClient.createNote(options, successCb, failCb);
};
model.updateSingle = function (id, title, successCb, failCb) {
    var options = {};
    options.uriParams = {id: id};
    options.body = {title: title};
    return apiClient.updateNote(options,successCb, failCb);
};
model.removeSingle = function (id, successCb, failCb) {
    var options = {};
    options.uriParams = {id: id};

    return apiClient.removeNote(options, successCb, failCb);
};

module.exports = model;