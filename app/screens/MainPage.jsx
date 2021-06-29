import * as React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import VideoItem from './VideoItem';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28badfzae',
        uri: "https://docs.expo.io/static/videos/dev-prod/devMode.mp4"
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
        uri: "https://docs.expo.io/static/videos/dev-prod/devMode.mp4"
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bfsqb',
        uri: "https://docs.expo.io/static/videos/dev-prod/devMode.mp4"
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bfqsefsqeb',
        uri: "https://docs.expo.io/static/videos/dev-prod/devMode.mp4"
    }
];

export default function MainPage() {
    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <VideoItem uri={item.uri} />}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height}
                keyExtractor={item => item.id}
                snapToAlignment={'start'}
                decelerationRate={'normal'} />
        </View>
    );
}
