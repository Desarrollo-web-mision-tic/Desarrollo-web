import React, {Fragment, useContext, useEffect} from 'react';

import '../styles/ListaPro.css'
import { SectionCard } from '../components/SectionCard';
import AuthContext from '../components/autenticacion/authContext';

export const Productos = () => {

  //extraer la informacion autenticada
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  useEffect(() => {
      usuarioAutenticado();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    return(
      <>
      <SectionCard />
      </>
    );
}

export default Productos;