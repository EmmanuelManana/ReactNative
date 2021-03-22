import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles'


const StyledButton = (props) => {

    const {type, content} = props
    return (
        <View style={styles.container}>
            <Pressable
                style={[
                    styles.button,
                    { backgroundColor: type === 'primary' ? "#171A20CC" : "#FFFFFFA6" }
                ]} 
            >
                <Text
                    style={[styles.text,
                    { color: type === 'primary' ? "#FFFFFF" : "#171A20" }
                    ]}>
                   {content}
                </Text>
            </Pressable>
        </View>
    )
}

export default StyledButton;