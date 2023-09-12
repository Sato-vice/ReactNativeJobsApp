import { useState, useEffect } from "react";
import axios from "axios"

export default useFetch = ( endpoint, query ) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': "2055ac6e64mshdfaee7adeb7c0f7p163b2djsn5f03687c5e80",
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
            ...query
        },
    };

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const res = await axios.request(options)
            setData(res.data.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
            alert("There is an error")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return {data, isLoading, error, refetch}
}
