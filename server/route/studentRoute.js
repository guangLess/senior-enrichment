const route = require('express').Router()
const Student = require('../../db/models/student')
var error = new Error()

route.get('/', (req, res, next ) => {
    Student.findAll().then(data => {
                            data
                            ? res.status(200).json(data)
                            : res.status(404).json('Can not find Student')
                          }
       ).catch(error)
})

route.get('/:id', (req, res, next ) => {
    let id = req.params.id
    if (!Number(id)) return next(error)

    Student.findById(id).then(data => {
                            data
                            ? res.status(200).json(data)
                            : res.status(404).json('Can not find Student')
    }).catch(error)
})

route.post('/', (req, res, next ) => {
    //if (!Number(id)) return next(err);    
    const content = req.body
    console.log("content---->", content)
    Student.create({
        name: content.name,
        email: content.email//maybe need to include campus
    }).then(book => 
        res.status(200).json(book)
        ) //maybe redirect to itself?
//curl -H "Content-Type: application/json" -X POST -d '{"name":"friendie dog","email":"dog@cute.com"}' http://localhost:1337/api/student/
})


route.use((err, req, res, next) => {
  res.status(500);//internal error
  res.send(err.message || '** something went wrong? did not get to catch it till now **');
});

module.exports = route

/*
    const {name, text} = req.body
 +    const user = User.findOrCreate({where: {name}})
 +      .then(([user]) => user)
 +      .then(user =>
 +        Comment.create({
 +          userId: user.id,
 +          emojiId: req.emoji.id,
 +          text,
 +        }))
 +      .then(c => res.send(c))
 +      .catch(next)

*/