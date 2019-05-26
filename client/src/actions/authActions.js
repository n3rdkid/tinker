import {GET_ERRORS} from "./types";
import axios from "axios";
export const registerUser=(userData)=>dispatch=>{
    axios
      .post("http://localhost:5000/api/users/register", userData)
      .then(() => console.log("succsss"))
      .catch(err =>
        dispatch ({
            type:GET_ERRORS,
            payload:err.response.data
        }));
}