import app from './app'
import './database'



app.listen(app.get('port'))

app.set('port', process.env.PORT || 3000)

console.log('Server on port', app.get('port'));