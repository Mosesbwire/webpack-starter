import axios from 'axios'
import AbstractView from './abstractView'

export default class extends AbstractView {
  constructor(params) {
      super(params);
      this.setTitle("Developer Jokes");
  }

  async getHtml(){
    return `<p> Dev Jokes</p>`
  }

  async generateJoke(){
    const config = {
     method: 'get',
     url: 'https://backend-omega-seven.vercel.app/api/getjoke',
     headers: {}
    }
  
    axios(config).then((res) => {
      const resString = JSON.stringify(res.data)
      const data = JSON.parse(resString)
      document.getElementById('joke').innerHTML = `${data[0].question}..${data[0].punchline}`

    })

  

  }


}