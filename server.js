const
  request = require('request'),
  express = require('express'),
  app = express()
  
app.set('port', (process.env.PORT || 80))

app.use(express.static('client'))

app.get('/result/:data', (req, res) => {

  const target = req.params['data']

  request.post({
    
    url: `https://github.com/repos/${target}/minesweeper/issues`,
    
    form: { title: `Congrutilation ${new Date}` }
    
  })
  
  res.end()

})
  
app.listen(app.get('port'), () => console.log(`Сервер запущен`))