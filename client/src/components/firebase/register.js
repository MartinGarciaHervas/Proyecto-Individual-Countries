import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const register = async(email, password)=>{
    const response = await createUserWithEmailAndPassword(auth, email, password)
    console.log(response);
}

export default register