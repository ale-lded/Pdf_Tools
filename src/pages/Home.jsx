import { Link } from 'react-router-dom';


export default function Home() {
    return (

        <div>
            <h1>Applicazione di gestione PDF!</h1>
            <p>Qui puoi comprimere, unire e convertire i tuoi file PDF in modo semplice e veloce.</p>
            <p>Seleziona un'opzione dal menu per iniziare.</p>
            <div className="btn-container">
                <button className="btn"><Link to="/compress">Comprimi PDF</Link></button>
                <button className="btn"><Link to="/merge">Unisci PDF</Link></button>
                <button className="btn"><Link to="/convert">Converti PDF</Link></button> 
            </div>
        </div>
       
        
        );
    }
    