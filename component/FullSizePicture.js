import React from 'react';
import { View, Image, Text, StyleSheet} from 'react-native';

const FullSizePicture = (props) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={{  
                    uri: props.uri,
                }}
            />
            <View style={styles.wrapper}>
                <Text style={styles.fontStyle}>{props.name}</Text>
                <Text style={styles.fontStyle}>{props.author}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
    container: {
        position: "relative",
        width: "98%",
        height: "98%",
        margin: "1%",
    },

    fontStyle: {
        textAlign: "center",
        fontSize: 16,
    },

    wrapper: {
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        width: "80%",
    },

    img: {
        width: "100%",
        height: "100%",

    },
});

export default FullSizePicture;