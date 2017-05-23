var mongoose = require('mongoose');

module.exports = mongoose.model('Warrant', {
    fileHASH: {
        type: String,
        default: ''
    },
    validations: {
        type: Number,
        default: 0
    },
    file: {
        type: Buffer,
        default: ''
    }
});