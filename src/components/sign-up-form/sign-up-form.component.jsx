import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss"
import Button from "../button/button.component";

const defaultFormFields = {
    "displayName" : "",
    "email" : "",
    "password" : "",
    "confirmPassword" : "",
}


const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;
    console.log(formFields);

  const handleChange = (event) => {
    console.log(event)
    const {name, value} = event.target;

    setFormFields({...formFields, [name] : value});
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    // we need to: 
    // confirm password matches
    // see if user is authenticated with the email and password
    // create user doc from createuser
    if(password !== confirmPassword) {
       alert("Password does not Match")
       return;
    }
    try{const {user} = await createAuthUserWithEmailAndPassword(email, password);
        console.log(user)
        await createUserDocumentFromAuth(user, {displayName});
        setFormFields(defaultFormFields);
      }
    catch(error){
      if(error.code === "auth/email-already-in-use") {
        alert("You cannot create an account as the email is already in use")
      }
      console.log("we encountered:", error)
    }

  }
  
    return (
    <div className="sign-up-container">
        <h2>
            Don't have an account?
        </h2>
        <span>
            Sign up with your Email and Password
        </span>
        <form onSubmit={handleSubmit}>
            <FormInput
            label = "Display Name"
            required  
            onChange={handleChange} 
            name="displayName" 
            value={displayName}
            />
            
            <FormInput
            label = "Email"
            type="email" 
            required 
            onChange={handleChange} 
            name="email" 
            value={email}
            />

            <FormInput
            label = "Password"
            type="password" 
            required 
            onChange={handleChange} 
            name="password" 
            value={password}
            />

            <FormInput
            label = "Confirm Password"
            type="password" 
            required 
            onChange={handleChange} 
            name="confirmPassword" 
            value={confirmPassword}
            />
            <Button type= "submit">Sign Up</Button>          
        </form>
    </div>
  )
}

export default SignUpForm