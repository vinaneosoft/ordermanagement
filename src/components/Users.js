import { getAllUsers } from "../model/UsersCrud";

export function Users() {
    function getUsers(){
         getAllUsers();
    }

   return (
    <button onClick={getUsers}>GET ALL USERS</button> 
   );
}