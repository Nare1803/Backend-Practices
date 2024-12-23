const EventEmitter = require("events")
class UserActionTracker extends EventEmitter{
    constructor() {
        super()
        this.actionCount = 0
    }

    logAction(action) {
        this.actionCount++
        this.emit('actionLogged', action)
        if (this.actionCount > 5) {
          this.emit('maxActions')
        }
      }
    
      getActionCount() {
        return this.actionCount
      }
    }
    
    const userActionTracker = new UserActionTracker()
    
    userActionTracker.on('actionLogged', (action) => {
      console.log(`Action logged: ${action}`)
    })
    userActionTracker.on('maxActions', () => {
      console.log('Maximum action limit reached!')
    })

    userActionTracker.logAction('login')
    userActionTracker.logAction('viewProfile')
    userActionTracker.logAction('logout')
    userActionTracker.logAction('login')
    userActionTracker.logAction('updateProfile')
    userActionTracker.logAction('logout')

    console.log(`Total actions logged: ${userActionTracker.getActionCount()}`)