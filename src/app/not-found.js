import Link from "next/link"
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function Notfound(){
    return(<div className="pagenotfound"><h4>Page not found <Link href="./">Home Page</Link></h4></div>)
}