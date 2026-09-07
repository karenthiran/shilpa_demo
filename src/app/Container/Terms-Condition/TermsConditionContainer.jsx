'use client'
import React, { useEffect, useState } from 'react'

const TermsConditionContainer = () => {
    const [termscondition, setTermscondition] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchtermscondition = async () => {
        setLoading(true)
        try {
            const res = await fetch('/api/terms-and-conditions');
            if (!res.ok) throw new Error('Failed to fetch termscondition');
            const data = await res.json();
            setLoading(false)
            setTermscondition(data)




        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchtermscondition()
    }, [])

    if(loading) return (
        <>
        <div className='mt-5 py-5'>
        <h3 className='text-center mt-5 pt-5'>Loading.......</h3>

        </div>
        </> 
    )
    return (
        <>
            <div
                className="position-relative mt-5 pt-5 container"
                dangerouslySetInnerHTML={{ __html: termscondition?.content }}
            />


        </>
    )
}

export default TermsConditionContainer