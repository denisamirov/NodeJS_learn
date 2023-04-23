const events = require('events');

//Создаем объект класса EventEmitter()
var em = new events.EventEmitter()
let counter = 0;

//Перехват события с его последующей обработкой!
em.on('time', function() {
    console.log(`counter is ${counter}`)
})

//Генерация события. result -  1
em.emit('time', counter++)
//Генерация события. result - 2
em.emit('time', counter++)