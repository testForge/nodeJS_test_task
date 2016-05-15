'use strict';
var express = require('express');
var router = express.Router();

var notes = require('../models/note');

//GET /notes
router.get('/', function (req, res) {
    var successCb = (statusCode, data)=> {
        res.send(data);
    };

    notes.getAll(successCb);
});

//GET /notes/:id
router.get('/:id', function (req, res) {
    var successCb = (statusCode, data)=> {
        res.json(data);
    };

    notes.getSingle(req.params.id, successCb);
});

router.post('/', (req, res)=> {
    var successCb = (statusCode, data)=> {
        res.json(data);
    };

    notes.createNew(req.body.title, successCb)
});

router.put('/:id', (req, res)=> {
    var successCb = (statusCode, data)=> {
        res.json(data);
    };

    notes.updateSingle(req.params.id, req.body.title, successCb)
});

router.delete('/:id', (req, res)=> {
    var successCb = (statusCode)=> {
        statusCode === 204 ? res.send('Note is deleted'):('???');
    };

    notes.removeSingle(req.params.id, successCb)
});

module.exports = router;