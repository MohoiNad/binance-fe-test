import  { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import {API_SERVER} from '../constants/api'

export const useFetchCurrency = () => {
    const [data, setData] = useState({ hits: [] });
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await axios.get(API_SERVER);
                setData(result.data);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchData();
    }, []);
    return {isError, isLoading, data}
}