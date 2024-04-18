"use client"
import { MapPin } from 'lucide-react'
import React from 'react'
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'

function GoogleAddressSearch({ selectAddress, setCoordinates }) {
    return (
        <div className='flex items-center w-full'>
            <MapPin className='h-10 w-10 p2 px-2 rounded-l-lg text-primary bg-slate-200'/>
            <GooglePlacesAutocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}
                selectProps={
                    {
                        placeholder: "Enter address",
                        isClearable: true,
                        className: "w-full",
                        onChange: (place) => {
                            console.log(place);
                            selectAddress(place);
                            geocodeByAddress(place.label)
                            .then(result => getLatLng(result[0]))
                            .then(({ lat, lng }) => {
                                setCoordinates({ lat, lng })
                            })
                        }
                    }
                }
            />
        </div>
    )
}

export default GoogleAddressSearch