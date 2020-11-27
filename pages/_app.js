import '../styles/globals.css'
import App from 'next/app';
import firebase, {FirebaseContext} from '../firebase'
import useAunteticacion from '../hooks/useAutenticacion';

const MyApp = props => {

  //  Guarda el usuario autenticado
  const usuario = useAunteticacion();

  const { Component, pageProps } = props;

  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        usuario
      }}
    >
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  )
}

export default MyApp
