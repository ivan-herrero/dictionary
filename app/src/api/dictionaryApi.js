import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL;

const dictionaryApi = axios.create({
  baseURL: `${API_URL}/`,
})

const getEntries = async (word) => {
  try {
    const response = await dictionaryApi.get(`entries/${word}`)
    return {
      data: response.data.entry
    }
  } catch (error) {
    return {
      error
    }
  }
}

export default {
  getEntries
}
