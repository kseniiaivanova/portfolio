import axios from "axios";

import { IRepo } from "../models/IRepo";

export function getRepos(): Promise<IRepo[]> {
  return  axios.get("https://api.github.com/users/kseniiaivanova/repos")
  .then((response)=>{
  //lista med object IRepo[]
  console.log(response.data);
  return response.data;
 
  
    
});
}