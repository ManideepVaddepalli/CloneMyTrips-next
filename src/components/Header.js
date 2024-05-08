import { useAuthContext } from "@/context/useAuthContext";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
export default function Header(){
    const {user,dispatch}=useAuthContext()
    const handleLogout=()=>{
        if (typeof window !== 'undefined') {
            localStorage.clear()
        }
        dispatch({type:"LOGOUT"})
    }
    return(<div className="header-container">
        <div className="title-container">
            <h3 className={inter}><Link href="./">CloneMyTrips</Link></h3>
        </div>
        {!user&&<div className="login-component">
            <Link href='./login'>Login</Link>
        </div>}
        {user&&<div className="loggedout-component"><p className="useremail">{user.email}</p><button className={inter.className} onClick={handleLogout}>Logout</button></div>}
    </div>)
}