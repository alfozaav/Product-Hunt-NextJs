import React from 'react';
import Layout from '../components/layouts/Layout';
import {css} from '@emotion/core';

import { Formulario, Campo, InputSubmit } from '../components/UI/Formulario';

//  Validaciones
import useValidation from '../hooks/useValidation';

const CrearCuenta = () => {

    const STATE_INICIAL = {
        nombre: '',
        email: '',
        password: ''
    }

    const {} = useValidation()

    return (
        <div>
            <Layout>
                <>
                    <h1
                        css={css`
                            text-align: center;
                            margin-top: 5rem;
                        `}
                    >Crear Cuenta</h1>
                    <Formulario>
                        <Campo>
                            <label htmlFor="nombre">Nombre</label>
                            <input 
                                type="text" 
                                id="nombre" 
                                placeholder="Tu Nombre" 
                            />
                        </Campo>

                        <Campo>
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="Tu Email" 
                            />
                        </Campo>

                        <Campo>
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                placeholder="Tu Password" 
                            />
                        </Campo>

                        <InputSubmit type="submit" value="Crear  Cuenta" />
                    </Formulario>
                </>
            </Layout>
         </div>
    );
}

export default CrearCuenta;