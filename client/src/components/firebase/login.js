// import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { loginAction } from "../../Redux/Actions/actions";

const login = async (email, password, dispatch) => {

    
    const valid = await signInWithEmailAndPassword(auth, email, password)
    console.log(valid);

    if(valid){
        dispatch(loginAction({
            email: email,
            access: true
        }))
    }
}

export default login