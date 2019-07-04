import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (options, axiosInstance = axios) => {
    const [trigger, setTrigger] = useState(0);
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });

    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(new Date()); // trigger useEffect again
    };

    useEffect(() => {
        if (!options.url) return;

        axiosInstance(options)
            .then(data => {
                setState({
                    ...state,
                    loading: false,
                    data
                });
            })
            .catch(error => {
                setState({
                    ...state,
                    loading: false,
                    error
                });
            });
    }, [trigger]);

    return { ...state, refetch };
};

export default useAxios;
