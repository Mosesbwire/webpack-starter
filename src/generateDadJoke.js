import axios from 'axios'
import AbstractView from './abstractView'

export default class extends AbstractView {
  constructor(params) {
      super(params);
      this.setTitle("Dad Jokes");
  }

  async getHtml(){
    return `<p> Dad Jokes</p>`
  }

  async generateJoke(){
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }
  
    axios.get('https://icanhazdadjoke.com', config).then((res) => {
      
      document.getElementById('joke').innerHTML = res.data.joke

    })

  }


}


