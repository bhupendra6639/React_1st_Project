import { useState, useEffect } from 'react'
function CustomApi({ url }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
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
        }, 1000);
    }, [])
    return {
        data,
        loading
    }
};
export default CustomApi;