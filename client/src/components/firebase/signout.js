import { logout } from "../../Redux/Actions/actions"
import { auth } from "../../firebase"
import { signOut } from "firebase/auth"

const signout = async(dispatch) => {
    const response = await signOut(auth)
    console.log(response);
    dispatch(logout())
}

export default signout