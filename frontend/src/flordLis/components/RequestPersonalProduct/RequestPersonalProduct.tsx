import { Link } from 'react-router-dom'
import { Carousel } from '../Carousel/Carousel'

export const RequestPersonalProduct = () => {
    return (
        <>
            <section className='container__request'>
                <div className='request__content'>
                    <div className='request__left'>
                        <h2 className='request__title'>Bisutería, cuadros, accesorios y más.</h2>
                        <h3 className='request__subtitle'>Descubre nuestros diseños y solicita el tuyo <br />personalizado.</h3>
                        <Link className='request__button' to="/request-personal-design">Solicitar</Link>
                    </div>
                    <div className='request__right'>
                        <Carousel />
                    </div>
                </div>
            </section>
        </>
    )
}
