const route = require('express').Router()
const db = require('../../db/models/index')
const Student = require('../../db/models/student')
const Campus = require('../../db/models/campus')
var error = new Error()

route.get('/', (req, res, next ) => {
    Student.findAll()
        .then(data => {
                            data
                            ? res.status(200).json(data)
                            : res.status(404).json('Can not find Student')
                          }
       ).catch(error)
})

route.get('/:id', (req, res, next ) => {
    let id = req.params.id
    if (!Number(id)) return next(error)
    
    Student.findOne({
        where: {id: id}, 
        include: [{model: Campus}]
    })
    .then(data => {
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
        )
//curl -H "Content-Type: application/json" -X POST -d '{"name":"friendie dog","email":"dog@cute.com"}' http://localhost:1337/api/student/
})

route.put('/:id', (req, res, next) => {
    const {name, email} = req.body
    let id = req.params.id
    if (!Number(id)) return next(err);
    
    Student.findById(id).then(
        stu => {
            stu
                ? stu.update({
                    name, email
                }).then(result =>
                    res.status(200).json(result)
                    )
                : res.status(404).json({ stuInfo: 'Attempt To Update Student stuInfo' })
        })
})

route.delete('/:id', (req, res, next) => {
    let id = req.params.id
    if (!Number(id)) return next(err);
    Student.destroy({
        where: {
            id: id
        }
    }).then( num => {
        console.log("---------->stu-->>>", num ); //check row num get effected 
                (num === 0)
                ? res.status(404).end()
                : res.status(204).json({"name":"byebye"})
    })
//curl -H "Content-Type: application/json" -X DELETE -d '{"":"kate","password":"1234"}' http://localhost:1337/api/students/
//curl -X DELETE 'http://localhost:1337/api/student/3'

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