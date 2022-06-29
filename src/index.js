import app from './app'
import './database'

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../../public/dist/index.htm'));
    res.json({ message: 'Welcome' })
})

app.listen(app.get('port'))

app.set('port', process.env.PORT || 3000)

console.log('Server on port', app.get('port'));