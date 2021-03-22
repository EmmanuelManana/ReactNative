import React from 'react'
import { View, Text } from 'react-native'
import CarItem from '../CarItem'

import cars from './cars'

const CarsList = () => {
    console.log(cars)
    return (
        <View style={{width : "100%", height : "100%"}}>
            {cars.map( ({name,tagline, price, image, taglineCTA}) => (
                <CarItem
                key={name}
                name={name}
                price={price}
                tagline= {tagline}
                taglineCtA={taglineCTA}
                image={image}
              />
            ))}
        </View>
    )
}

export default CarsList;
