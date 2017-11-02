'use strict';

const Validator = require('./validator');

exports.Validator = Validator;
exports.validator = (map, loose) => new Validator(map, loose);
exports.multi = (maps, loose) => Validator.multi(maps, loose);
exports.request = req => Validator.fromRequest(req);
