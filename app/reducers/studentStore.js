import axios from 'axios'

const INIT_STUDENT = 'INIT_STUDENT'
const CREATE_STUDENT = 'CREATE_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'
const REMOVE_STUDENT = 'REMOVE_STUDENT'
const FETCH_STUDENT = 'FETCH_STUDENT'

// Actions 
const init = students => ({ type: INIT_STUDENT, students })
const update = student => ({ type: UPDATE_STUDENT, student })
const create = student => ({ type: CREATE_STUDENT, student })
const fetch = student => ({type: FETCH_STUDENT, student})
const remove = id => ({type: REMOVE_STUDENT, id})

//reducer
export default function reducer(students = [], action){
    switch (action.type){
        case INIT_STUDENT:
            return action.students;
        case CREATE_STUDENT:
            return [action.student, ...students]
        case UPDATE_STUDENT:
            return action.student
        case FETCH_STUDENT:
            return action.student

        case REMOVE_STUDENT:
                return action.id
        default:
        return students
    }
}

//thunk
export const getStudents = () => dispatch => {
    axios.get('/api/student')
        .then(res => dispatch(
            init(res.data)
        ))
}

export const addStudent = (studentData) => dispatch => {
    axios.post('/api/student', studentData)
        .then(res => 
                dispatch(
                    create(res.data)
                ))
}

export const getSingleStudent = (id) => dispatch => {
    axios.get('/api/student/' + id)
        .then(res =>
                dispatch(
                    fetch(res.data)
                ))
}

export const updateStudent = (info) => dispatch => {
    axios.put('/api/student/' + info.id, info)
        .then(res =>
                dispatch(
                    update(res.data)
                ))
}

export const deleteStudent = (id) => dispatch => {
    axios.delete('/api/student/' + id)
        .then(res => {
            console.log("deleted data---", res)
                dispatch(
                    remove(res.data)
                )})
}