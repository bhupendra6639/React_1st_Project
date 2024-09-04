import { useState, useEffect } from 'react'
function CustomApi({ url }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((res) => {
                return res.json("");
            })
            .then((data) => {
                setData(data);
            })

    }, [])
    return {
        data,
    }
};
export default CustomApi;