import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

//  Hook que detecta si hay un inicio de sesión y la guarda

function useAutenticacion() {
    const [ usuarioAutenticado, guardarUsuarioAutenticado ] = useState(null);

    useEffect(() => {
        const unsuscribe = firebase.auth.onAuthStateChanged(user => {
            if ( user ) {
                guardarUsuarioAutenticado(user);
            } else {
                guardarUsuarioAutenticado(null);
            }
        });
        return () => unsuscribe();

    }, []);

    return usuarioAutenticado;
}

export default useAutenticacion;