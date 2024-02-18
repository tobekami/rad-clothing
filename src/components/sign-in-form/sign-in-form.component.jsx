import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useState } from "react";
import "./sign-in-form.styles.scss"

const defaultFormFields = {
  "email" : "",
  "password" : "",
}


const SignInForm = () => {
  
  const singInWithGoogle = async () => {
    console.log("I'm working")

    const {user} = await signInWithGooglePopup();
    console.log(user)
    await createUserDocumentFromAuth(user); 
  }


  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;
    console.log(formFields);

  const handleChange = (event) => {
    console.log(event)
    const {name, value} = event.target;

    setFormFields({...formFields, [name] : value});
  }

  const signInhandler = (event) => {
    event.preventDefault()
    console.log(email, password)
    
    signInAuthUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      const user =  userCredential.user;
      // ...
      setFormFields(defaultFormFields);
      console.log(user);
    })
    .catch((error) => {
        switch(error.code) {
          case "auth/wrong-password":
          alert("Incorrect Password")
          break;
          case "auth/user-not-found":
          alert("Email not registered")
          break;
          default:
            console.log(error);
        }
    });
  }

  return (
    <div className="sign-in-container">
        <h2>
            Sign In page
        </h2>
        <form onSubmit={signInhandler}>
        
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

          <div className="buttons-container">
            <Button type= "submit">Sign In</Button>  
            <Button buttonType={"google"} onClick={singInWithGoogle}>
            Google Sign In
        </Button>
          </div>
        </form>
    </div>
  )
}

export default SignInForm