'use strict'

class HomeController {
    async index({ view }){
        return view.render('index')
    }

    async mail ({ request, session, response }) {

        const messages = {
            'name.required': 'Graag uw naam vermelden ',
            'email.required': 'Graag uw emailadres vermelden',
            'tel.required': 'Graag uw telefoonnummer vermelden',
            'message.required': 'Graag uw vraag en/of opmerking vermelden'
        }

        const rules = {
          name: 'required',
          email: 'required|email',
          tel: 'required',
          message: 'required'
        }
    
        const validation = await validate(request.all(), rules, messages)

        if (validation.fails()) {
            session
            .withErrors(validation.messages())
            .flashExcept()

            return response.redirect('back')
        }
    
        const email_to = 'contact@draftman.fr';
        const data = request.only(['email','name','tel','message'])
    
        await Mail.send('mails/contact', data, (message) => {
          message
            .to(email_to)
            .from('<email>', '<name>')
            .subject('<objet>')
            .replyTo('<email>', '<author>')
        })
    }
}

module.exports = HomeController
