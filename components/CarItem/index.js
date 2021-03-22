import React from 'react'
import {Text, View, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles'

const CarItem = (props) => {
    const {name, tagline, price, taglineCtA, image} = props;
    return (
        <View style={styles.carContainer}>

            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}{' '}{price}{' '}
                    <Text style={styles.subtitleCTA}>
                        {taglineCtA}
                    </Text>
                </Text>
            </View>


            <View style={styles.buttonContainer}>

                <StyledButton 
                type="primary" 
                content="custom order" 
                />

                <StyledButton 
                content="existing inventory"
                />
            </View>

        </View>
    )
}

export default CarItem
