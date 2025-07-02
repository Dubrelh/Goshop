import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import { useState, useEffect } from 'react'

export default function BANIERE(){
    const [state, setState] = useState(true)

    useEffect(() =>{
        const interval = setInterval(() => {
            setState(prev => !prev)
        }, 5000);

        return () => clearInterval(interval)
    },[])

    return( 
        <div className="baniere">
            <div className="baniere-logo">
                {/* Remplace le src par le chemin de ton logo */}
                <img src={require('../medias/logo.png')} alt="Logo" style={{height: 60}} />
            </div>
            <div className="baniere-slide">
                { state?
                <Slide id='i1' backing={require('../medias/image9.png')} message='Pleins de reduction pour les premieres commandes'/>
                :
                <Slide id='i2' backing={require('../medias/image1.png')} message='offres exclusives pour la rentrer'/>
                }
            </div>
            <marquee behavior="" direction="">Découvrez nos meilleures sélections Amazon et profitez d’offres exclusives sur vos achats !</marquee>
        </div>
    )
}



function Slide(props){


    const handleCategorieClick = () => {
    const bestSection = document.getElementById("best");
    if (bestSection) {
      bestSection.scrollIntoView({ behavior: "smooth" });
    }
    };

    const slideStyle = {
       backgroundImage: `url(${props.backing})`,
    }

    return(
        <div className='slide' key={props.id} style={slideStyle}>
            <p>{props.message}</p>
            <button onClick={handleCategorieClick}>Acherter Maintenant</button>
        </div>
    )
}