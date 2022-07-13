import http from "./http-common";
import authHeader from './auth-header';
import Cookies from 'universal-cookie';

const getAll = () => {
  const cookies = new Cookies();
  console.log(cookies.getAll())
  http.get()
  .then((resp)=>{
    const cookieHeaders = resp.headers
    console.log("cookies",cookieHeaders)
  })
  let config = {
    headers: authHeader(),

  }
  const usuario = {
    
    dni: 21588643,
    password: "Gustavo70*"
  }
  
  http.get("/lista/planificacion?_=1657322516602",{
    headers:
    {
        'X-CSRF-Token': "0FFUVqIzXyPfEUaCyGbI0NZnrJuEEyKElSTIPMq"
    }
})
  
};

const CursoService = {
  getAll
}

export default CursoService