import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

const DisplayAnImage = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('Fullsize',
            {
                name: props.name,
                author: props.author,
                uri: props.uri,
            }
        )}>
                <Image
                    style={styles.img}
                    source={{  
                        uri: props.uri,
                    }}
                    />
                <View style={styles.wrapper}>
                    <Text style={styles.fontStyle}>"{props.name}"</Text>
                    <Text style={styles.fontStyle}>{props.author}</Text>
                </View> 
            </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    
    container: {
        position: "relative",
        width: "100%",
        height: 200,
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

export default DisplayAnImage;