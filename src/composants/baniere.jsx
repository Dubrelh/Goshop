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
           { state?
           <Slide id='i1' backing={require('../medias/image9.png')} message='Pleins de reduction pour les premieres commandes'/>
           :
           <Slide id='i2' backing={require('../medias/image1.png')} message='offres exclusives pour la rentrer'/>
           }
           <marquee behavior="" direction="">Profitez de -50% de reduction sur vos premiere commande</marquee>
        </div>
    )
}

function Slide(props){

    const slideStyle = {
       backgroundImage: `url(${props.backing})`,
    }

    return(
        <div className='slide' key={props.id} style={slideStyle}>
            <p>{props.message}</p>
            <button>Acherter Maintenant</button>
        </div>
    )
}