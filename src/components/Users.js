import { getAllUsers } from "../model/UsersCrud";

export function Users() {
    async function  getUsers(){
         const response=await getAllUsers();
         console.log(response);
    }

   return (
    <button onClick={getUsers}>GET ALL USERS</button> 
   );
}