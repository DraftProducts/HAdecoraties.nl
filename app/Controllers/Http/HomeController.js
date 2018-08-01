'use strict'

const { get, post } = require('snekfetch');
const Mail = use('Mail')
const { validate } = use('Validator')

const album = '694485600890626'
const appId = '1862844164021508'
const appSecret = 'f5c8d3957b08592c5ef985d90e1ab733'

class HomeController {
    async index({ view }){
        //https://graph.facebook.com/694485600890626?fields=photos{link}&access_token=EAADrnh9xgQ8BAOWQ837n6ZBkSSMtfYBZC6sfSYiZCu4ogJ6FpOYIJPtbZCpFUntcrbjrrB7H1SKAwVGrde3ZBGsBVb5ZAhnFufCTUyvQZCvv7hROMqawUr3O49189EWxg1WxcQ2klJMrBPRt9H92cIMGl2PZA8r5eYubl7UTkcGGnysRZC0KZChEnV5ZCWxWZA3ttOftS9oBxztPgQZDZD
        
        const res = await get(`https://graph.facebook.com/oauth/access_token?client_id=${appId}&client_secret=${appSecret}&grant_type=client_credentials`)
        const response = await get(`https://graph.facebook.com/${album}/photos?fields=images,link&access_token=${res.body.access_token}`)
        const producten = JSON.parse(response.body.toString('utf8'))
        return view.render('index', {producten}) 
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

            return response.redirect('/#contact')
        }
    
        const email_to = 'hadecoraties@gmail.com';
        const data = request.only(['email','name','tel','message'])
    
        await Mail.send('mails/contact', data, (message) => {
          message
            .to(email_to)
            .from('<email>', '<name>')
            .subject('Email van HAdecoraties.nl')
            .replyTo('<email>', '<name>')
        })
    }
}

module.exports = HomeController
