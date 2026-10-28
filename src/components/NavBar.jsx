import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        //aggiungere gli stati per togliere il pulsante home nella home, convert in conver


        <div className="navbar">
        <button className="btn-nav">
        <Link to="/">Torna alla Home</Link>
        </button>
        <button className="btn-nav">
        <Link to="/Compress">Comprimi PDF</Link>
        </button>
        <button className="btn-nav">
        <Link to="/Merge">Unisci PDF</Link>
        </button>
        <button className="btn-nav">
        <Link to="/Convert">Converti PDF</Link>
        </button>
        </div>
        );  
    }