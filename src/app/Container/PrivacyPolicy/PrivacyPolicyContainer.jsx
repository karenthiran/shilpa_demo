'use client'
import React, { useEffect, useState } from 'react'

const PrivacyPolicyContainer = () => {
    const [policy, setPolicy] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchPolicy = async () => {
        setLoading(true)
        try {
            const res = await fetch('/api/privacy-policy');
            if (!res.ok) throw new Error('Failed to fetch policy');
            const data = await res.json();
            setLoading(false)
            setPolicy(data)




        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPolicy()
    }, [])

    if (loading) return (
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
                dangerouslySetInnerHTML={{ __html: policy?.content }}
            />


        </>
    )
}

export default PrivacyPolicyContainer