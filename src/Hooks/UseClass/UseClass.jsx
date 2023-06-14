import React, { useEffect, useState } from 'react';

const UseClass = () => {

    const [classes, setClasses] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://assignment-12-server-one-theta.vercel.app/class')
            .then(res => res.json())
            .then(data => {
                setClasses(data)
                setLoading(false)
            })
    }, [])

    return [classes, loading]

};

export default UseClass;