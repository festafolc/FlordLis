import EcoFlordLis from '../../../assets/images/ecoflordlis.jpg';
import './personalProduct.css';

export const PersonalProduct = () => {
  return (
    <>
      <section className='RPP-container'>
        <div className='RPP-left__container'>
          <div className='RPP-left__top'>
            <h1 className='RPP-left__title'>¡Podemos ayudarte a obtener el diseño que deseas!</h1>
            <h2 className='RPP-left__text'>Envíanos toda la información detallada posible sobre tu diseño</h2>
            <h2 className='RPP-left__text'>y entraremos en contacto contigo.</h2>
          </div>
          <img className='RPP-left__img' src={EcoFlordLis} alt="Imagen Flor d' Lis" />
        </div>
        <div className='RPP-right__container'>
          <form className="RPP-form">
            <div className="RPP-form__inputs">
              <input className="RPP-form__input" type="text" placeholder="Nombre" />
              <input className="RPP-form__input" type="text" placeholder="Apellidos" />
              <input className="RPP-form__input" type="email" placeholder="Correo electrónico" />
              <input className="RPP-form__input" type="text" placeholder="Teléfono" />
              <div className='RPP-form-contact-options'>
                <label className='RPP-form__text RPP-form__text-extraMargin'>Prefiero que me contacte por:</label>
                <div className='RPP-form__contact'>
                  <label className='RPP-form__text'>Correo electrónico</label>
                  <input className='RPP-form__checkbox RPP-form__checkbox-extraMargin' type="checkbox" />
                  <label className='RPP-form__text'>Teléfono</label>
                  <input className='RPP-form__checkbox' type="checkbox" />
                </div>
              </div>
              <div className='RPP-form-info'>
                <label className='RPP-form__text'>¡Danos una primera aproximación sobre tu diseño!</label>
                <textarea className='RPP-form__textarea' cols={50} rows={10} name="comment" form="usrform" />
              </div>
              <button className="RPP-register__button" type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
