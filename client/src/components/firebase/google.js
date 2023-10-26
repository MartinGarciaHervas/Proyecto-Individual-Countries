import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../../firebase"
import { loginAction } from "../../Redux/Actions/actions"

const googleLogin = async (dispatch) => {
    const provider = new GoogleAuthProvider()
    const google = await signInWithPopup(auth, provider)
    console.log(google);

    if(google){
        dispatch(loginAction({
            access: true
        }))
    }
}

export default googleLogin