const express = require ('express')
const PORT = 1234;
//CONTROLLERS
const fighterController = require('./controllers/fighterController');


const app = express();
app.use(express.json());

//ENDPOINTS
app.get('/api/fighters', fighterController.getAllFighters);
app.post('/api/fighter', fighterController.addFighter);
app.delete('/api/fighters/:id', fighterController.deleteFighter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
