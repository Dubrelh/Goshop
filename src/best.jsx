import img1 from './medias/image1.png'
import img2 from './medias/image2.jpg'
import img17 from './medias/image17.webp'
import img4 from './medias/image4.jpg'
import img5 from './medias/image5.jpg'

export default function BEST(){
    return(
        <div className="best">
            <h1>Nos best-seller</h1>
            <div>
              <Product img1={img1}  title="Robe d'été en coton pur" prix="7350" isnew />
              <Product img1={img2}  title="Montre connecté, recharge sans fil" prix="17350" />
              <Product img1={img17}  title="Montre connecté, recharge sans fil" prix="17350" isnew/>
              <Product img1={img4}  title="Montre connecté, recharge sans fil" prix="17350" />
              <Product img1={img5}  title="Montre connecté, recharge sans fil" prix="17350" isnew/>
            </div>
        </div>
    )
}

// img2={img2} img3={img3} img4={img4}

function Product (props){
  return(
    <div className='product'>
      <div className='img'>
        <img src={props.img1} alt="not found" />
        {/* <img src={props.img2} alt="not found" />
        <img src={props.img3} alt="not found" />
        <img src={props.img4} alt="not found" /> */}
      </div>
      <div className='title'>
        <h2>{props.title}</h2>
        <div>
          <h3>{props.prix} fcfa</h3>
        { props.isnew ? <span className="nouv">New</span> : null }
        </div>
        <button>Ajouter au panier</button>
      </div>
    </div>
  )
}

