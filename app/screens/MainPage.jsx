import React, { useState, useCallback, useContext } from 'react';
import { View, FlatList, Dimensions, ScrollView, Text } from 'react-native';
import VideoItem from './VideoItem';
import { AppContext } from '../AppProvider';

import ProfilPage from './ProfilPage';

export default function MainPage() {
    const [viewedItems, setViewedItems] = useState(0);
    const { data, setData } = useContext(AppContext);

    const handleVieweableItemsChanged = useCallback(({ changed }) => {
        setViewedItems(() => changed[0].index);
    }, []);
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

    const userInfo = data.filter(e => e.index === viewedItems)

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            snapToInterval={Dimensions.get('window').width}
            snapToAlignment={"end"}
            decelerationRate={'fast'}
        >
            <FlatList
                data={data}
                renderItem={({ item }) => <VideoItem uri={item.uri} likes={item.likes} comments={item.comments} star={item.star} name={item.name} photo={item.photo} title={item.title} />}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height}
                keyExtractor={item => item.id}
                snapToAlignment={'start'}
                onViewableItemsChanged={handleVieweableItemsChanged}
                viewabilityConfig={viewConfigRef.current}
                decelerationRate={'normal'} />
            <ProfilPage {...userInfo} />
        </ScrollView>
    );
}
