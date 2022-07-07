import app from './app'
import './database'

const PORT = process.env.PORT;
app.listen(PORT)

// app.listen(app.get('port'))
console.log('Server on port', PORT)