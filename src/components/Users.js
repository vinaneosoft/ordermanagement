import { getAllUsers, getUserById,addUser } from "../model/UsersCrud";

export function Users() {
    async function  getUsers(){
         const response=await getAllUsers();
         console.log(response);
    }

    async function  getUser(){
     const response=await getUserById(6);
     console.log(response);
     }
     async function  addNewUser(){
          const user={
               "id":44,
               "name":"Shiva",
               "email":"shiva@gmail.com",
               "phone" :"6767676767"
          }
          const response=await addUser(user);
          console.log(response);
     }
     async function  update(){
     
     }
     async function  deleteUser(){
     
     }
   return (
     <>
          <button onClick={getUsers}>GET ALL USERS</button> 
          <button onClick={getUser}>GET USER BY ID</button>
          <button onClick={addNewUser}>ADD NEW USER</button>
          <button onClick={update}>UPDATE USER</button>
          <button onClick={deleteUser}>DELETE USER</button>
     </>
   );
}