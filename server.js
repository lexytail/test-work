const
  request = require('request'),
  express = require('express'),
  app = express()
  
  
app.use(express.static('client'))

app.get('/result/:data', (req, res) => {

  const target = req.params['data']

  request.post(`https://github.com/${target}`)

})
  
app.listen(80, () => console.log(`Сервер запущен`))