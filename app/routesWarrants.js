/**
 * Created by XE61374 on 23/05/2017.
 */
var Warrant = require('./models/warrant')
function getWarrants(res) {
    Warrant.find(function (err, warrants) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(warrants); // return all warrants in JSON format
    });
};
module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all warrants
    app.get('/api/warrants', function (req, res) {
        // use mongoose to get all todos in the database
        getWarrants(res);
    });

    // create warrant and send back all warrants after creation
    app.post('/api/warrants', function (req, res) {
        // create a todo, information comes from AJAX request from Angular
        //Add smartcontract logic

        //smartcontrac logic
        Warrant.create({
            fileHASH: req.body.fileHASH,
            validations: 0,
            file: req.body.file,


            done: false
        }, function (err, warrant) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getWarrants(res);
        });

    });

    // validate a warrant
    app.put('/api/warrants/:warrant_id', function (req, res) {
        //Add smartcontract logic

        //smartcontrac logic

        Warrant.findOneAndUpdate(
            {_id:req.params.warrant_id},
            {$inc: {validations:1}},
            function (err, warrant) {
                if( err)
                    res.send(err);
                getWarrants(res);
            });

    });

    // delete a warrant
    app.delete('/api/warrants/:warrant_id', function (req, res) {
        Warrant.remove({
            _id: req.params.warrant_id
        }, function (err, warrant) {
            if (err)
                res.send(err);

            getWarrants(res);
        });
    });


    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });




};