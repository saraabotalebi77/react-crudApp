"use strict";
const url_server = "http://localhost:9000/";

// @desc -> get users
// @route -> http://localhost:9000/users 
export const getUsers = async()=>{
    const url = `${url_server}users`;
    try{
        return fetch(url,{
            method:"GET",
            hedaers:{
                "content-type" : "application/json"
            }
        })
    }catch(error){
        console.log("ERROR (get users from server) :",error.message);
    }
}

//@desc -> post user
//@route -> http://localhost:9000/users
export const postUser = (newUser)=>{
    const url  = `${url_server}users`;
    try{
        return fetch(url,{
            method:"POST",
            body : JSON.stringify(newUser),
            headers:{
                "content-type":"application/json",
            }
        });
    }catch(error){
        console.log("ERROR (post user to server) :",error.message);
    }
}

// @desc -> update user with id
// @route ->  http://localhost:9000/users/id

export const updateUser = (userId,updatedUser)=>{
    const url = `${url_server}users/${userId}`;
    try{
        return fetch(url,{
            method:"PUT",
            body : JSON.stringify(updatedUser),
            headers:{
                "content-type":"application/json",
            }
        })
    }catch(error){
        console.log("ERROR (update user from server) :",error.message);
    }
    
}

// @desc -> delete user with id
// @route ->  http://localhost:9000/users/id
export const deleteUser = (userId)=>{
    const url = `${url_server}users/${userId}`;
    try{
        return fetch(url,{
            method:"DELETE",
            headers:{
                "content-type":"application/json",
            }
        })
    }catch(error){
        console.log("ERROR (delete user from server) :",error.message);
    }
   
}