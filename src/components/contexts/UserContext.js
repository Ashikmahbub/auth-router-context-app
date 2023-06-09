import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../FireBase/FirebAse.config';
export const AuthContext = createContext();
const auth =getAuth(app);

const UserContext = ({children}) => {
    const [user , setUser] = useState( {displayName:'Akash'})
   
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
   
    const signIn =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);

    }
    const authInfo = {user,createUser,signIn};
    return (
        <div>
            
             <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default UserContext;