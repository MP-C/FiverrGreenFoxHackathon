import React, { useEffect } from 'react';
import { TouchableWithoutFeedback, Dimensions, View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { Video } from 'expo-av';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

import Star from '../assets/Star';
import HeartFill from '../assets/HeartFill';
import Share from '../assets/Share';
import Comment from '../assets/Comment';
import Pause from '../assets/Pause';

export default function VideoItem({ uri, likes, comments, star, name, photo, title }) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [liked, setLiked] = React.useState(false);
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
                <View>
                    <Video
                        style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width }}
                        ref={video}
                        source={uri}
                        useNativeControls={false}
                        resizeMode="cover"
                        isLooping={true}
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                    <Pause style={{ ...styles.pause, opacity: status.isPlaying ? 0 : 1 }}></Pause>
                </View>
            </TouchableWithoutFeedback >
            {/* Left */}
            <View
                style={{
                    position: "absolute",
                    right: "5%",
                    bottom: "15%",
                    alignItems: "center"
                }}>
                <TouchableWithoutFeedback onPress={() => setLiked(!liked)}>
                    <HeartFill style={{ ...styles.iconRight, fill: liked ? "#F14647" : "#fff", strokeOpacity: liked ? 0 : 0.4 }} />
                </TouchableWithoutFeedback>
                <Text style={{ ...styles.leftText, color: liked ? "#F14647" : "#fff", textShadowColor: liked ? "#fff" : '#000' }}>{likes + (liked ? 1 : 0)}</Text>
                <Comment style={{ ...styles.iconRight, strokeOpacity: 0.4 }} />
                <Text style={styles.leftText}>{comments}</Text>
                <Share style={{ ...styles.iconRight, strokeOpacity: 0.4 }} />
            </View>
            {/* Bottom */}
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.9)']}
                style={styles.bottomGradient}>
                <Image
                    style={styles.profilImage}
                    source={{ uri: photo }}>
                </Image>
                <View style={{ width: "70%" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.text}>{name}</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Star style={{ fill: "#FFDF01" }} />
                            <Text style={{ ...styles.text, color: "#FFDF01", fontWeight: "bold" }}>{star}</Text>
                        </View>
                    </View>
                    <Text style={{ ...styles.text, color: "#1cbf73", fontWeight: "bold" }}>{title}</Text>
                </View>
            </LinearGradient>
        </View >
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
    pause: {
        width: 100, height: 100,
        position: "absolute",
        alignSelf: "center",
        top: "45%",
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
    },
    leftText: {
        lineHeight: 15,
        color: "#fff",
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 3,
        marginTop: 3,
        marginBottom: 10,
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 14
    }
});