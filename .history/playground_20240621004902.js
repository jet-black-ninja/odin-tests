const fetch = require('node-fetch')

const result =
  fetch('https://vatapi.com/v1/country-code-check?code=DE', {
    headers: {
      'apikey': "123example"
    }
  })
  .then(response => response.json())
  .then(data => data.rates.standard.value)

result