import { useEffect, useRef, useState } from "react";

const useFetch = ( url ) => {
    if( !url || !url.includes( 'https://' ) ) throw new Error( 'Debe ingresar un URL' );

    const isMountedRef = useRef( true );
    const [ state, setState ] = useState( { data: [], loading: true, error: null } );

    useEffect( () => {
        return () => {
            isMountedRef.current = false;
        }
    }, [] )

    useEffect( () => {
        fetch( url )
            .then( res => res.json() )
            .then( data => {
                isMountedRef.current && setState( { data: data, loading: false, error: null } ); 
            } )
            .catch( err => {
                setState( { data: [], loading: false, error: `Error en la peticion. ${ err }` } );
            } )
    }, [ url ] );

    return state;
};

export default useFetch;
