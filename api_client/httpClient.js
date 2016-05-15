'use strict';

const http = require('http');
const https = require('https');
const config = require('./config.json');
const querystring = require('querystring');


const client = {};
client.get = function (options, onSuccess, onFail) {
    var prot = http;
    options.host = options.host || config.api.hostUrl;
    options.method = "GET";
    options.headers = {};

    var req = prot.request(options, (res)=> {
        var output = '';
        res.setEncoding('utf8');
        res.on('data', (chunk)=> {
            output += chunk;
        });

        res.on('end', ()=> {
            var data = JSON.parse(output);
            onSuccess(res.statusCode, data);
        });

        res.on('error', (err)=> {
            console.log(`Get request error: ${options.host}/${options.path}`);
            onFail(err);
        })
    });

    req.end();
};

client.post = function (options, onSuccess, onFail) {
    var prot = http;
    options.host = options.host || config.api.hostUrl;
    options.method = "POST";
    options.headers = {
        "Content-Type":"application/json"
    };

    var req = prot.request(options, (res)=> {
        var output = '';
        res.setEncoding('utf8');

        res.on('data', (chunk)=> {
            output += chunk;
        });

        res.on('end', ()=> {
            var data = JSON.parse(output);
            onSuccess(res.statusCode, data);
        });

        res.on('error', (err)=> {
            console.log(`POST request error: ${options.host}/${options.path}`);
            onFail(err);
        });
    });
    req.write(querystring.stringify(options.body));
    req.end();
};

client.put = function (options, onSuccess, onFail) {
    var prot = http;
    options.host = options.host || config.api.hostUrl;
    options.method = "PUT";
    options.headers = {};

    var req = prot.request(options, (res)=> {
        var output = '';
        res.setEncoding('utf8');

        res.on('data', (chunk)=> {
            output += chunk;
        });

        res.on('end', ()=> {
            var data = JSON.parse(output);
            onSuccess(res.statusCode, data);
        });

        res.on('error', (err)=> {
            console.log(`POST request error: ${options.host}/${options.path}`);
            onFail(err);
        });
    });
    req.write(querystring.stringify(options.body));
    req.end();
};

client.delete = function (options, onSuccess, onFail) {
    var prot = http;
    options.host = options.host || config.api.hostUrl;
    options.method = "DELETE";
    options.headers = {};

    var req = prot.request(options, (res)=> {
        var output = '';
        res.setEncoding('utf8');
        res.on('data', (chunk)=> {
            output += chunk;
        });

        res.on('end', ()=> {
            // var data = JSON.parse(output);
            onSuccess(res.statusCode)//, data);
        });

        res.on('error', (err)=> {
            console.log(`Get request error: ${options.host}/${options.path}`);
            onFail(err);
        })
    });

    req.end();
};

module.exports = client;