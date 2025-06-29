// import '../fontawesome/css/all.min.css'

export default function TOPBAR(){
    return(
        <div className='topbar'>
            <h3><i><b>GoShop</b></i></h3>
            <div>
                <a href="#">Acceuil</a>
                <a href="#">Produits</a>
                <a href="#">Parametre</a>
            </div>
            <button><i className='fas fa-bag-shopping'></i></button>
        </div>
    )
}