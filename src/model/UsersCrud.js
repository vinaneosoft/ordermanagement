import axios from "axios";


const url="http://localhost:4600/graphql";
const getAllQuery="query{fetchUsers{_id, phone}}";
export async function getAllUsers(){
    // backend request
    return await axios.get(url+"?query="+getAllQuery)
}

/* export function addUser(){

}

export function getUserById(){

}

export function updateUser(){

} */