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
                <Slide id='i1' backing="https://th.bing.com/th/id/OIP.UuvAWqDz7SphKDIu7Y8DdAHaFO?w=252&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" message='Bienvenue chez vous !'/>
                :
                <Slide id='i2' backing="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80" message='Vous cherchez les bons produits ? Vous êtes au bon endroit.'/>
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