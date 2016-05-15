'use strict';
const uriTemplates = require('./uriTemplates.json');
const httpClient = require('./httpClient');
const apiHelper = require('../utils/api_client');


const api = {};
api.getAllNotes = function (opts, successCb, failCb) {
    var uriTmpl = uriTemplates.get.GetNoteList;
    var options = {
        "path": apiHelper.buildUri(uriTmpl, opts.uriParams)
    };

    httpClient.get(options, successCb, failCb);
};

api.getSingleNote = function (opts, successCb, failCb) {
    var uriTmpl = uriTemplates.get.GetNote;
    var options = {
        "path": apiHelper.buildUri(uriTmpl, opts.uriParams)
    };

    httpClient.get(options, successCb, failCb);
};

api.createNote = function (opts, successCb, failCb) {
    var uriTmpl = uriTemplates.post.CreateNote;
    var options = {
        "path": apiHelper.buildUri(uriTmpl, opts.uriParams),
        "body": opts.body
    };

    httpClient.post(options, successCb, failCb);
};

api.updateNote = function(opts, successCb, failCb){
    var uriTmpl = uriTemplates.put.UpdateNote;
    var options = {
        "path": apiHelper.buildUri(uriTmpl, opts.uriParams),
        "body": opts.body
    };
    
    httpClient.put(options, successCb, failCb);
};

api.removeNote = function(opts, successCb, failCb){
    var uriTmpl = uriTemplates.delete.RemoveNote;
    var options = {
        "path": apiHelper.buildUri(uriTmpl, opts.uriParams)
    };

    httpClient.delete(options, successCb, failCb);
};

module.exports = api;