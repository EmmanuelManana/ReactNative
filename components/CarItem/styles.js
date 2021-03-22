import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    carContainer: {
        height: "100%",
        width: "100%",
        alignItems: 'center'
      },
      titles: {
        marginTop: "25%",
        width: "100%",
        alignItems: "center"
      },
      title: {
        fontSize: 40,
        fontWeight: '500'
      },
      subtitle: {
        fontSize: 16,
        color: "#5c5e62"
      },
      subtitleCTA:{
        textDecorationLine: 'underline'
      },
      image: {
        width: "100%",
        height: "100%",
        resizeMode: 'cover',
        position: 'absolute'
      },
      buttonContainer: {
        position: 'absolute',
        bottom: "50px",
        width: "100%",
      }
})

export default styles;