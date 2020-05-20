
// ------------------ normal code ------------------
const returnElements = (status) => {
    if(status === 1) {
      sendToLog('processing')
     
    } else if(status === 2) {
      sendToLog('fail')
  
    } else if(status === 3) {
      sendToLog('fail')
   
    } else if(status === 4) {
      sendToLog('success')
   
    } else if(status === 5) {
      sendToLog('cancel')
    
    } else {
      sendToLog('other')
     
    }
  }
               
// --------------switch case code basic----------
const returnElements = (status) => {
    switch (status) {
      case 1:
        sendToLog('processing')
        break
      case 2:
      case 3:
         sendToLog('fail')// this function duplicate  case log fails
        break
      case 4:
        sendToLog('success')
        break
      case 5:
        sendToLog('cancel')
        break
      default:
        sendToLog('other')
    }
  }
  // -------------- using tenary operators ---------


  const actions = {
    '1': ['processing'],
    '2': ['fail'],
    '3': ['fail'],
    '4': ['success'],
    '5': ['cancel'],
    'default': ['other']
  }
  const returnElements = (status) => {
    let action = actions[status] || actions['default'], LogName = action[0];
    sendLog(LogName)
  }

    // -------------- using map es6  ---------

    const actions = new Map([
        ['1', ['processing']],
        ['2', ['fail']],
        ['3', ['fail']],
        ['4', ['success']],
        ['5', ['cancel']],
        ['default', ['other']]
      ])
      
      const clickHandler = (status) => {
        let action = actions.get(status) || actions.get('default')
        sendLog(action[0])
      }