import React, { useEffect } from 'react';
import { TouchableWithoutFeedback, Dimensions, View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { Video } from 'expo-av';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

import Star from '../assets/Star';
import HeartFill from '../assets/HeartFill';
import HeartEmpty from '../assets/HeartEmpty';
import Share from '../assets/Share';
import Comment from '../assets/Comment';

export default function VideoItem({ uri }) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [loaded] = useFonts({
        Roboto: require('../assets/fonts/Roboto-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View>
            <TouchableWithoutFeedback onPress={() =>
                status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }>
                <Video
                    style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width }}
                    ref={video}
                    source={{ uri: uri }}
                    useNativeControls={false}
                    resizeMode="cover"
                    isLooping={true}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            </TouchableWithoutFeedback >
            <View
                style={{
                    position: "absolute",
                    right: "5%",
                    bottom: "15%",
                }}>
                <HeartFill style={{ ...styles.iconRight, fill: "#fff" }} />
                <Text style={{ lineHeight: 15, color: "#000" }}>3015</Text>
                <Comment style={{ ...styles.iconRight, fill: "#fff" }} />
                <Share style={styles.iconRight} />
            </View>
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.9)']}
                style={styles.bottomGradient}>
                <Image
                    style={styles.profilImage}
                    source={{ uri: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/83598ce6f26f090a63d27d916a41c945-851874161620157771253/JPEG_20210505_011928_745969646.jpg" }}>
                </Image>

                <View style={{ width: "70%" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.text}>@aakashparjapat</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Star style={{ fill: "#FFDF01" }} />
                            <Text style={{ ...styles.text, color: "#FFDF01", fontWeight: "bold" }}>4.7</Text>
                        </View>
                    </View>
                    <Text style={{ ...styles.text, color: "#1cbf73", fontWeight: "bold" }}>Web Programming, Custom Website</Text>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "#fff",
        textShadowRadius: 1,
        fontFamily: "Roboto",
        lineHeight: 30,
        fontSize: 15,
        marginLeft: "5%"
    },
    bottomGradient: {
        alignItems: "center",
        height: "15%",
        width: "100%",
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
    },
    profilImage: {
        height: 60,
        width: 60,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "#fff",
        marginLeft: "5%"
    },
    iconRight: {
        height: 35,
        width: 35,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 0 },
        // shadowOpacity: 0,
        // shadowRadius: 10,
        // elevation: 3,
    }
});