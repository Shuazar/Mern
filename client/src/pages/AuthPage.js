import React, { useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";

export const AuthPage = () => {
    const {loading, request, error} = useHttp()
    const [form , setForm] = useState({
       email:'',password:''
    })

    useEffect(()=>{
    },[error])
    
    const changeHandler = event =>{
        setForm({...form, [event.target.name]: event.target.value })
    }
 
    const registerHandler = async () =>{
        try{
            debugger
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log('Data',data)
        }
        catch(e){
        }
    }
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Do short link</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Registration/Login</span>
            <br/>
            <div>

            <div className="input-field">
               <input 
               placeholder="Enter Email" 
               id="email" 
               type="text" 
               name="email"
               className="yellow-input"
               onChange={changeHandler}
               />
               <label>Email:</label>
            </div>

            <div className="input-field">
               <input 
               placeholder="Enter Password" 
               id="password" 
               type="password" 
               name="password"
               className="yellow-input"
               onChange={changeHandler}
               />
               <label>Password:</label>
            </div>


            </div>
          </div>
          <div className="card-action">
              <button 
              className="btn yellow darken-4" 
              style={{marginRight: 10}}
              disabled={loading}
              >
                  Enter
                  </button>
              <button
               className="btn grey lighten-1 black-text"
               onClick={registerHandler}
               disabled={loading}
               >
                   Registration
                   </button>
          </div>
        </div>
      </div>
    </div>
  );
};
