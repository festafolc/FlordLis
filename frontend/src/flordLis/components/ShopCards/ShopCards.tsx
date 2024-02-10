import './shopCards.css';
import ecoFlordLis from '../../../assets/images/ecoflordlis.jpg';
import flordLisHome from '../../../assets/images/flordlis_home.jpg';

export const ShopCards = () => {
    return (
        <>
            <section className='APP-cards__content'>
                <div className='APP-cards__shop'>
                    <h2 className='APP-shop__title'>Eco FlordLis</h2>
                    <img className="APP-shop__img" src={ecoFlordLis} alt="Eco Flor d Lis" />
                </div>
                <div className='APP-cards__shop'>
                    <h2 className='APP-shop__title'>FlordLis Home</h2>
                    <img className="APP-shop__img" src={flordLisHome} alt="Flor d Lis Home" />
                </div>
            </section>
        </>
    )
}
