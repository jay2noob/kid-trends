import axios from 'axios'

// setting up the base URL to get from our backend (to use in the frontend)
export default axios.create({
  baseURL: ''
})