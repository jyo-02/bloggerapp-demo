import conf from "../conf/conf.js";
import {Client, Account, ID} from "appwrite"

//these are appwrite services for authentication

//we're making services such as login, logout, createAccount using methods for each service to prevent vendor-locking

// we're making a class and creating its object client first, then creating object account (requires the client object for its creation) which is used to create the services

//in a jist, we just make changes under the hood of the methods and objects and change the appwrite service codes if we ever want to change the backend 

//frontend just calls the service methods, without knowing its inner defs
 
export class AuthService {
    client = new Client();
    account;


    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client) 
    }

    async createAccount({email, password, name}){ // the method passes these in an object which we de-structure, async waits for the createAccount op
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //call another method to directly log in after creating account
                return this.login({email, password})
            } else {
                return userAccount;
            }
        } catch (error) {
             throw error;
        }

    }
    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
           return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            
        }
        return null; // if it doesn't find any user, can be done in try block using if-else
    }

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout ::error " ,  error);
        }
    }


}

const authService = new AuthService() // anyone who wishes to use the class methods, will need to create its objects so its better to create the object itself and export it instead of the class so that we can use the methdos directly later

export default authService