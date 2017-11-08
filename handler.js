import Alexa from 'alexa-sdk'
export const replytoSalam = (event, context, callback) => {
  const alexa = Alexa.handler(event, context)
  alexa.registerHandlers(handlers)
  alexa.execute()
}

const handlers = {
  'LaunchRequest': function () {
    this.emit('ReplyToSalam')
  },
  'ReplyToSalamIntent': function () {
    this.emit('ReplyToSalam')
  },
  'ReplyToSalam': function () {
    this.response.speak('Walekumassalam !')
    this.emit(':responseReady')
  },
  'AMAZON.HelpIntent': function () {
    const speechOutput = 'This is the Reply to Salam Skill. '
    const reprompt = 'Say Assalamalekum or salam, to hear me speak.'

    this.response.speak(speechOutput).listen(reprompt)
    this.emit(':responseReady')
  },
  'AMAZON.CancelIntent': function () {
    this.response.speak('Ya Allah MasSalam!')
    this.emit(':responseReady')
  },
  'AMAZON.StopIntent': function () {
    this.response.speak('See you later!')
    this.emit(':responseReady')
  }
}
