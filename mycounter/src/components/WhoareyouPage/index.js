import {Link} from 'react-router-dom'

function LoginOrSingup(){
    return(
        <div>
            <Link to="/login">
            <button>
                Login
            </button></Link>
            <Link to="/signup"><button>Signup</button></Link>
        </div>
    )
}


export default LoginOrSingup