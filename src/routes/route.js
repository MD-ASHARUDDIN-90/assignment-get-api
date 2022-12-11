const express = require('express');
const router = express.Router();
const _ = require('underscore')
const mentorModule = require('../abc/xyz/myModule'); 
const req = require('express/lib/request');
const { route } = require('express/lib/application');


router.get("/profile-details", function(req, res){
    // Write the LOGIC here
    res.send('dummy response')
})



router.get('/marvel', function(req, res){
    const marvel = ["AVENGER" , "SPIDERMAN" , "SUPERMAN" , "IRONMAN"]
    res.send(marvel)
})
router.get('/movie/:indexNumber', function(req, res){
    const movie = ["AVENGER" , "SPIDERMAN" , "SUPERMAN" , "IRONMAN"]
    // console.log(JSON.stringify(req))
    res.send(movie[req.params.indexNumber])
})
router.get('/movies/:indexNumber', function(req, res){
    const movie = ["AVENGER" , "SPIDERMAN" , "SUPERMAN" , "IRONMAN"]
    if (req.params.indexNumber > 3) {
        res.send("ERROR PLEASE SELECT VALID INDEX-NUMBER in the range of 0 to 3")
    }
    res.send(movie[req.params.indexNumber])
})

router.get('/films', function (req, res){
    let filmDetails = [ {
        id: 1,
        name: "The Shining"
       },
        {
        id: 2,
        name: "Incendies"
       },
        {
        id: 3,
        name: "“Rang de Basanti”"
       }, {
        id: 4,
        name: "“Finding Nemo”"
       }]
    //    console.log(filmDetails)
    res.send(filmDetails)
})
router.get('/films/:filmsID', function (req, res){
    let films = [ {
        id: 1,
        name: "The Shining"
       },
        {
        id: 2,
        name: "Incendies"
       },
        {
        id: 3,
        name: "“Rang de Basanti”"
       }, {
        id: 4,
        name: "“Finding Nemo”"
       }]
    //    console.log(films[req.params.filmsID].name)
    if (req.params.filmsID > 3) {
        res.send("ERROR PLEASE SELECT VALID INDEX-NUMBER type in the range 0 to 3")
    }
    res.send(films[req.params.filmsID].name)
})
router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

// PATH Param example
router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use many ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

// PATH Param example
router.get("/profile/:name", function(req, res){
    console.log('Printing the request to find out wjere name is stored',req.params)
    console.log('user name is',req.params.name)
    //console.log(`User requesting for profile is ${name}`)
    res.send("dummy details")
})

// Query Param example
router.get("/shoes", function(req, res){
    console.log("The filter options for shoes are -",req.query)
    //req.query.size
    //req.query.brand
    res.send("dummy shoes response")
})

module.exports = router;