// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-app'

MongoClient.connect(connectionURL, { useNewUrlParse: true ,  useUnifiedTopology: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to db')
    }

    const db = client.db(databaseName)

    db.collection('users').deleteMany({
        age: 27
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })


    //Update

        // db.collection('tasks').updateMany({
        //     completed: true
        // },{
        //     $set: {
        //         completed: false
        //     }
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })



        // db.collection('users').updateOne({
        //     _id: new ObjectID("5dee535a6dce771614a3d5f3")

        // },{
        //     $inc: {
        //         age: 1
        //     }
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   //READ
   
    // db.collection('users').findOne({ name: 'Nikolaev', age:1}, (error, user) => {
    //     if(error){
    //         return console.log('Cannot find this user')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({age: 27}).toArray( (error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').find({completed: true}).toArray( (error,tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('tasks').find({completed: true}).count( (error,counts) => {
    //     console.log(counts)
    // })

    //CREATE

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Test',
    //     age: 26
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unableto insert user')
    //     }

    //     console.log(result.ops)
    // })
    // db.collection('users').insertMany([
    //     {
    //     name: 'Antoaneta',
    //     age: 23
    //     },
    //     {
    //         name: 'Nikolaev',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Cannot insert')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean bathroom',
    //         completed: true
    //     },
    //     {
    //         description: 'Wash the car',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Cannot insert')
    //     }

    //     console.log(result.ops)
    // })


})