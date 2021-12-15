import { Link } from 'react-router-dom'
import "../app.css";
const HomeAluno = () =>{
    return(
         <div className="Home">

            <div>
                <Link to="/App" className="active Link boletim">
                    Boletim
                </Link>
            </div>

            <div>
                <Link to="/AppChat" className="active Link Chat">
                    Chat
                </Link>
            </div>

            <div>
                <Link to="/AppAt" className="active Link Chat">
                    Atividades
                </Link>
            </div>
        </div>
    )
}

export default HomeAluno;