"use client"
import React, { useState } from 'react'
import GoogleAddressSearch from '../../_components/GoogleAddressSearch'
import { Button } from '@/components/ui/button'

function AddNewListing() {
    const [selectAddress, setSelectAddress] = useState()
    const [coordinates, setCoordinates] = useState()

    const nextHandler = () => {
        console.log(selectAddress, coordinates)
    }
    return (
        <div className='mt-10 md:mx-20 lg:mx-80'>
            <div className='p-10 flex flex-col gap-5 items-center justify-center'>
                <h1 className='font-bold text-2xl'>Add New Listing</h1>
                <div className='p-10 px-28 rounded-lg border 
                w-full
                shadow-md flex flex-col gap-5'>
                    <h2 className='text-gray-500'>Enter address which you want to list</h2>
                    <GoogleAddressSearch
                        selectAddress={(value) => setSelectAddress(value)}
                        setCoordinates={(value) => setCoordinates(value)} />
                    <Button
                        disabled={!selectAddress || !coordinates}
                        onClick={nextHandler}>
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AddNewListing