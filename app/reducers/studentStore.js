import axios from 'axios'

const INIT_STUDENT = 'INIT_STUDENT'
const CREATE_STUDENT = 'CREATE_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'
const REMOVE_STUDENT = 'REMOVE_STUDENT'

// Actions 
const init = students => ({ type: INIT_STUDENT, students })
const update = student => ({ type: UPDATE_STUDENT, student })
const create = student => ({ type: CREATE_STUDENT, student })
const remove = id => ({type: REMOVE_STUDENT, id})

//reducer
export default function reducer(students = [], action){
    switch (action.type){
        case INIT_STUDENT:
            return action.students;
        case CREATE_STUDENT:
            return [action.student, ...students]
        case UPDATE_STUDENT:
            return students.map(stu => (
                (action.student.id === stu.id)
                ? action.student
                : stu
                ))
        case REMOVE_STUDENT:
                return students.filter(stu => stu.id !== action.id);
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
        .then(res => dispatch(
            create(res.data)
        ))
}