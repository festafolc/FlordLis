import { useFlordLisDispatch } from "../../../hooks/useFlordLis";
import { cancelMessageBoxThunk, closeMessageBoxThunk, okMessageBoxThunk } from "../../../redux/thunks/messageBoxThunks";

export const MessageBox = ({ title, description, closeButton }: { title: string, description: string, closeButton: boolean }) => {

    const dispatch = useFlordLisDispatch();

    const okMessageBox = () => {

        dispatch(okMessageBoxThunk());
    }

    const cancelMessageBox = () => {

        dispatch(cancelMessageBoxThunk());
    }

    const closeMessageBox = () => {

        dispatch(closeMessageBoxThunk());
    }

    return (
        <>
            <section className="behind">
                <article className='container__modal'>

                    <div className='modal__title'>
                        <h2 className='modal__title-text'>{title}</h2>
                    </div>

                    <div className='modal__body'>
                        <div className='body__checkPassword'>
                            <h3 className='checkPassword__title'>{description}</h3>
                        </div>
                    </div>

                    {
                        (closeButton)
                            ? <button className='footer__button footer__button-check' onClick={closeMessageBox}>Cerrar</button>
                            :
                            <div className="modal__footer">
                                <button className='footer__button footer__button-check' onClick={okMessageBox}>Guardar</button>
                                <button className='footer__button footer__button-close' onClick={cancelMessageBox}>Cancelar</button>
                            </div>
                    }

                </article>
            </section>
        </>
    )
}
