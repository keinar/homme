import React from 'react'
import GoogleAddressSearch from '../../_components/GoogleAddressSearch'
import { Button } from '@/components/ui/button'

function AddNewListing() {
    return (
        <div className='mt-10 md:mx-56 lg:mx-80'>
            <div className='p-10 flex flex-col gap-5 items-center justify-center'>
                <h1 className='font-bold text-2xl'>Add New Listing</h1>
                <div className='p-10 px-28 rounded-lg border 
                w-full
                shadow-md flex flex-col gap-5'>
                    <h2 className='text-gray-500'>Enter address which you want to list</h2>
                    <GoogleAddressSearch />
                    <Button>Next</Button>
                </div>
            </div>
        </div>
    )
}

export default AddNewListing