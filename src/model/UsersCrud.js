import axios from "axios";


const url="http://localhost:4600/graphql";

export async function getAllUsers(){
    const getAllQuery="query{fetchUsers{_id, phone}}";
    return await axios.get(url+"?query="+getAllQuery)
}
export async function getUserById(id){
    const query=`query{
        getUser(_id:${id})
        {
            _id, phone, name
        }}`
    return await axios.get(url+"?query="+query)
}
export async function addUser(user){
   const addquery=`mutation{
    addUser(_id:${user.id}, phone:"${user.phone}", email: "${user.email}", name:"${user.name}") {
        _id
        email
        phone
        name
      }}`
    return await axios.post(url,{ query : addquery })
}
/*
export function updateUser(){

} */