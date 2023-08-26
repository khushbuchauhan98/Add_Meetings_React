import { Link } from "react-router-dom";
function Nav(){
    return(
        <nav>
  <Link to="/" className="link">Codekaro</Link>
            <div>
            
            <Link to="/upcoming-meeting" className="link" >Upcoming Meeting</Link>
            <Link to="/post-meeting" className="link" >Past Meeting</Link>
            <Link to="/add-meeting" className="link" >Add Meeting</Link>
            </div>
        </nav>
       
    )
}
export default Nav;