import { useState, useEffect } from 'react'
function CustomApi({ url }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    return res.json("");
                })
                .then((data) => {
                    setLoading(false);
                    setData(data);
                })
                .catch((err) => {
                    setError(err.message)
                })
        }, 1000);
    }, [])
    return {
        data,
        loading,
        error
    }
};
export default CustomApi;