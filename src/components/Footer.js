import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router";
import { GITHUB_URL, LinkedIn_URL } from "../../utils/constants";
const Footer=()=>{
    return(
        <div className="bg-pink-100 flex justify-between items-center py-5 ">
            <h1 className="font-bold text-2xl px-5">FOODIE</h1>
            <div className="font-bold text-2xl px-5 flex">
                <h1>By- Param Gupta</h1>
                <Link to={GITHUB_URL} target="_blank"><h1 className="text-4xl pl-2 cursor-pointer"><FaGithub /></h1></Link> 
                <Link to={LinkedIn_URL} target="_blank"><h1 className="text-4xl pl-2 cursor-pointer"><FaLinkedin /></h1></Link>
                </div>

        </div>
    )
}
export default Footer;