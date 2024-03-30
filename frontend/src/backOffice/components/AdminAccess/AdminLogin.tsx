import { useFlordLisDispatch, useFlordLisSelector } from "../../../hooks/useFlordLis";
import { useForm } from "../../../hooks/useForm";
import { FlordLisState } from "../../../redux/slices/flordLisSlice";
import { adminAccessThunk, adminLogoutThunk } from "../../../redux/thunks/flordLisThunks";

import './adminLogin.css';

const accessAdminFields: {} = {

    email: '',
    password: ''
}

export const AdminLogin = () => {

    const { CRUD, Read } = useFlordLisSelector<FlordLisState>((state) => state.flordLis);

    const dispatch = useFlordLisDispatch();

    const { email, password, onInputChange, onResetForm } = useForm(accessAdminFields);

    const adminLoginSubmit: any = (event: React.MouseEvent<HTMLElement>) => {

        event.preventDefault();

        try {

            // TODO: petición a base de datos
            if (email === "admin@admin.com" && password === "123123123" && (CRUD || Read)) {

                dispatch(adminAccessThunk(email));
            }
        } catch (error) {

            dispatch(adminLogoutThunk());
        }
        finally {

            dispatch(onResetForm);
        }
    };


    return (
        <>
            <section className="layout__adminAccess">
                <div className="adminAccess__container">
                    <h1 className="adminAccess__title">Acceso administrativo</h1>
                    <form className="adminAccess__form" onSubmit={adminLoginSubmit}>
                        <div className="adminAccess__inputs">
                            <input className="adminAccess__input" type="email" placeholder="Correo electrónico" name="email" value={email || ''} onChange={onInputChange}></input>
                            <input className="adminAccess__input" type="password" placeholder="Contraseña" name="password" value={password || ''} onChange={onInputChange}></input>
                            <button className="adminAccess__button" type="submit">Acceder</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
