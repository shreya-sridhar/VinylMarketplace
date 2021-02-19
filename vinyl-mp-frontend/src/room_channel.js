import actionCable from 'actioncable'
import Messages from './pages/main/Messages.js'

const CableApp = {}
CableApp.cable = actionCable.createConsumer(`ws://localhost:3002/cable`)

  // Room Channel : user1, user2  
  CableApp.cable.subscriptions.create("RoomChannel", {
    connected() {
      console.log('yiha, we are live!')
      // Called when the subscription is ready for use on the server
    },
  
    disconnected() {
      // Called when the subscription has been terminated by the server
    },
  
    received(data) {
        console.log(data.content)
        let d = document.createElement('p')
        let br = document.createElement('br')
        d.innerHTML = data.content
        let b = document.getElementById('content')
        b.appendChild(d)
        b.appendChild(br)
      
      // Called when there's incoming data on the websocket for this channel
  
    }
  });

  
export default CableApp
  
  
  