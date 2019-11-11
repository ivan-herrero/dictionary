const axios = require('axios');

const APP_ID = process.env.OD_APP_ID;
const API_KEY = process.env.OD_API_KEY;
const SOURCE_LANG = 'en-gb';

const oxfordDictionariesApi = axios.create({
  baseURL: 'https://od-api.oxforddictionaries.com/api/v2',
  headers: {
    'Accept': 'application/json',
    'app_id': APP_ID,
    'app_key': API_KEY
  }
});

const getEntries = async (word) => {
  try {
    const options = { params: { strictMatch: false } }
    const response = await oxfordDictionariesApi.get(`entries/${SOURCE_LANG}/${word}`, options)
    return {
      entry: parseEntriesResponse(response)
    }
  } catch (error) {
    return {
      error
    }
  }
};

const parseEntriesResponse = (response) => {
  const { data } = response
  if (isValidResponse(data)) {
    const lexicalEntry = data.results[0].lexicalEntries[0];
    const sense = lexicalEntry.entries[0].senses[0];

    return {
      id: data.id,
      word: data.word,
      provider: data.metadata.provider,
      lexicalCategory: lexicalEntry.lexicalCategory.id,
      definitions: [sense.definitions[0]],
      examples: sense.examples ? [sense.examples[0]] : [],
      pronunciations: lexicalEntry.pronunciations
    };
  }

  throw (new Error("Invalid Response"));
}

const isValidResponse = (res) => res.results && res.results[0].lexicalEntries &&
  res.results[0].lexicalEntries[0].entries && res.results[0].lexicalEntries[0].entries[0].senses;

exports.getEntries = getEntries
