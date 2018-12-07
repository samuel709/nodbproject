const express = require ('express')
const PORT = 1234;
//CONTROLLERS
const fighterController = require('./controllers/fighterController');


const app = express();
app.use(express.json());

app.get('/api/fighters', fighterController.getAllFighters);
app.post('/api/fighter', fighterController.addFighter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
