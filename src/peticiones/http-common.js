import axios from "axios";

export default axios.create({
  baseURL: "http://cursosipfl.trabajo.gba.gov.ar",
  headers: {
    
    "Content-type": "application/json"
  }
});