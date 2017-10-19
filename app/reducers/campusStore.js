import axios from 'axios'

//action 
//reducer
//store create edite delete

const INIT_CAMPUS = 'INIT_CAMPUS'
const CREATE_CAMPUS = 'CREATE_CAMPUS'
const UPDATE_CAMPUS = 'UPDATE_CAMPUS'
const REMOVE_CAMPUS = 'REMOVE_CAMPUS'
const FETCH_CAMPUS = 'FETCH_CAMPUS'

// Actions 
const init = campuses => ({ type: INIT_CAMPUS, campuses })
const update = campuse => ({ type: UPDATE_CAMPUS, campuse })
const create = campuse => ({ type: CREATE_CAMPUS, campuse })
const fetch = campuse => ({type: FETCH_CAMPUS, campuse})
const remove = id => ({type: REMOVE_CAMPUS, id})

//reducer

export default function reducer (campuses = [], action){
    switch (action.type){
      case INIT_CAMPUS:
          return action.campuses
      case CREATE_CAMPUS:
          return [action.campus, ...campuses]
      case UPDATE_CAMPUS:
          return action.campus
      case FETCH_CAMPUS:
          return action.campus
      case REMOVE_CAMPUS:
              return campuses.filter(camp => camp.id !== action.id);
     default: 
     return campuses
  }
}

//thunk 
export const getCampuses = () => dispatch => {
    console.log("get inside of the store ====>")
  axios.get('/api/campus')
      .then(res => dispatch(
          init(res.data)
      ))
}

export const addCampus = (CampusesData) => dispatch => {
  axios.post('/api/campus', CampusesData)
      .then(res => 
              dispatch(
                  create(res.data)
              ))
}

export const getSingleCampus = (id) => dispatch => {
  axios.get('/api/campuse/' + id)
      .then(res =>
              dispatch(
                  fetch(res.data)
              ))
}

export const updateCampus = (info) => dispatch => {
  axios.put('/api/campuse/' + info.id, info)
      .then(res =>
              dispatch(
                  update(res.data)
              ))
}

