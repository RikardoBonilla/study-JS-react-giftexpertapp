import { useEffect, useState } from 'react'
import { getGift } from '../helpers/getGift'

export const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGift( category )
            .then( img => {
                setstate({
                    data: img,
                    loading: false
                })                
            });
    }, [ category ])

    return state;

}