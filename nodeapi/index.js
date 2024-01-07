const express = require('express'),
      app = express()
      port = 3000
      cors = require('cors')

app.use(express.json()); 

app.use(cors());


let id = 3
let list = [{
        title: "Black Coffee",
        description: "Svart kaffe är så enkelt som det kan bli med malda kaffebönor dränkta i hett vatten, serverat varmt. Och om du vill låta fancy kan du kalla svart kaffe med sitt rätta namn: café noir.",
        id: 1
    },
    {
        title: "Latte",
        description: "Som den mest populära kaffedrycken där ute består latte av en skvätt espresso och ångad mjölk med bara en gnutta skum. Den kan beställas utan smak eller med smak av allt från vanilj till pumpa kryddor.",
        id: 2
    }]


app.get('/', (req, res) => {
    res.send(list)
})


app.post('/add', (req,res) => {
    const {title, description} = req.body
    if (title && description) {
        list.push(
            {title: title,
            description: description,
            id: id++})
        res.send(list)
    }
    else {
        res.send('Ошибка!')
    }
})


app.delete('/del/:id', (req, res) => {
    const id = list.findIndex(el => el.id == req.params.id)
    if (id !== -1) {
        list.splice(id, 1)
        res.send(list)
    } 
    else {
        res.send(`Элемента c ${id} не существует`)
    } 
})


app.put('/up/:id', (req, res) => {
    const {title, description} = req.body
    const id = list.findIndex(el => el.id == req.params.id)
    if (id !== -1) {
        list[id].title = title;
        list[id].description = description;
        res.send(list[id])
    }
    else {
        res.send(`Элемента с id ${req.params.id} не существует`)
    }
})


app.listen(3000, () => {
    console.log(`сервер запущен на порту ${port}`)
})