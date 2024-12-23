const EventEmitter = require('events');


class Timer extends EventEmitter{
   constructor (duration) {
    super()
    this.duration = duration
   }

   start() {
    this.emit("start")
    let remainingTime = this.duration

    while(remainingTime >=0) {
        this.emit("tick",remainingTime)
        if(remainingTime == 0) {
            this.emit("end")
            break
        }
        const startTime = Date.now()
        while(Date.now() - startTime < 1000) {

        }
        remainingTime--
    }
   }
}

const timer = new Timer(5);

timer.on('start', () => {
    console.log('Timer started!')
})

timer.on('tick', (time) => {
    console.log(`Time left: ${time}s`)
})

timer.on('end', () => {
    console.log('Timer ended!')
})

timer.start()
