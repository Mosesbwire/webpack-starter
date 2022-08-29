// DEMO JOKE APP
import generateDadJoke from './generateDadJoke'
import generateDevJoke from './generateDevJoke'
import './styles/main.scss'
import laughing from './assets/laughing.svg'


const laughImg = document.getElementById('laughImg')
laughImg.src = laughing

const navigateTo = url => {
    history.pushState(null,null,url)
    router()
}

const router = async ()=>{
    const routes = [
        {path: '/dist/', view: generateDadJoke},
        {path: '/dist/dev-jokes', view: generateDevJoke}
    ]

    const potentialMatches = routes.map(route =>{
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    })

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)
   
    if(!match){
        match = {
            route: routes[0],
            isMatch: true
        }
    }
    const view = new match.route.view()

    document.getElementById('title-container').innerHTML = await view.getHtml()
   return view
}

window.addEventListener('popstate', router)


document.addEventListener('DOMContentLoaded', ()=>{
    document.body.addEventListener('click', e =>{
        
        if(e.target.matches("[data-link]")){
            
            navigateTo(e.target.dataset.route)
            
        }

        if(e.target.id === 'gen-joke'){
            router().then(view => view.generateJoke())
        }
    })

    router()
})




