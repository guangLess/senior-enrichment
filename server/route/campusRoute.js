const route = require('express').Router()
const db = require('../../db/models/index')
const Student = require('../../db/models/student')
const Campus = require('../../db/models/campus')
var error = new Error()


route.get('/', (req, res, next ) => {
    Campus.findAll()
        .then(data => {
                            data
                            ? res.status(200).json(data)
                            : res.status(404).json('No Campuse found :(')
                          }
       ).catch(error)
})


route.get('/:id', (req, res, next ) => {
    let id = req.params.id
    if (!Number(id)) return next(error)
    
    Campus.findOne({
        where: {id: id}, 
        include: [{model: Student}]
    })
    .then(data => {
                            data
                            ? res.status(200).json(data)
                            : res.status(404).json('Can not find Campus')
    }).catch(error)
})

route.post('/', (req, res, next ) => {
    //if (!Number(id)) return next(err);    
    const content = req.body
    console.log("content---->", content)
    Campus.create({
        name: content.name,
        image: content.image
    }).then(book => 
        res.status(200).json(book)
        )       
     //curl -H "Content-Type: application/json" -X POST -d '{"name":"FullStack","image":"im/gLocation"}' http://localhost:1337/api/Campus/
})

route.put('/:id', (req, res, next) => {
    const {name, email} = req.body
    let id = req.params.id
    if (!Number(id)) return next(err);
    
    Campus.findById(id).then(
        stu => {
            stu
                ? stu.update({
                    name, email
                }).then(result =>
                    res.status(200).json(result)
                    )
                : res.status(404).json({ stuInfo: 'Attempt To Update Campus stuInfo' })
        })
})


route.use((err, req, res, next) => {
    res.status(500);//internal error
    res.send(err.message || '** something went wrong? did not get to catch it till now **');
  });

module.exports = route
