import React from 'react';
import {
  Button,
  Image,

  StyleSheet,
  Pressable,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { PressableButton } from 'react';

import KeyboardAvoidingWrapper from './KeyboardAvoingWrapper';
import FavoriteOn from './FavoriteOn';
import FavoriteOff from './FavoriteOff';
import OtherPeople from './OtherPeople';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    //    marginTop: 10,
    marginBottom: 50,
    marginLeft: 15,
    alignItems: 'center',
  },
  intro: {
    backgroundColor: 'white',
    paddingTop: 20,
    marginLeft: 20,
  },
  presentation: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profil: {
    marginTop: 10,
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  profilPhoto: {
    width: 45,
    height: 45,
    borderRadius: 50,
    margin: 10,
  },
  sectionFavorite: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonFavorites: {
    color: 'gray',
    width: 10,
    height: 10,
  },
  client: {
    height: 130,
    marginTop: 20,
    borderRadius: 50
  },
  groups: {
    flexDirection: 'row',
    flex: 3, height: null,
    width: null,
    resizeMode: 'cover',
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  works: {

  },
  work: {
    width: 150,
    height: 100,
    margin: 1,
  },
  name: {
    color: 'black',
    backgroundColor: 'white',
    color: '#003c1a',
  },
  job: {
    color: 'black',

  },
  buttonAbsolute: {
    position: 'absolute',
    bottom: 0,
    //   left: '30%',
    borderRadius: 50,
    backgroundColor: '#003c1a',
    color: 'white',
  },
})

export default function ProfilPage() {
  const [favorite, setFavorite] = React.useState(false);

  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container}>
        <View style={styles.presentation}>
          <Image style={styles.profil} source={require('../assets/fThomas.png')} />
          <Text style={styles.name}> @f_thomas </Text>
          <Text style={styles.job}> Manager Fiverr</Text>
          <View>
            <View style={styles.sectionFavorite}>
              <View>
                <Pressable onPress={() => setFavorite(!favorite)}>
                  <Text style={{
                    borderWidth: 1,
                    borderColor: '#003c1a',
                    color: 'rgb(25, 164, 99)',
                  }}> Add to Favorites  </Text>
                </Pressable>
              </View>
              <View>
                <Pressable onPress={() => setFavorite(!favorite)}>
                  {favorite ? <FavoriteOn />
                    : <FavoriteOff />}
                </Pressable>
              </View>
            </View>
          </View>
          <ScrollView scrollEventThrottle={10}
          >
            <View style={styles.intro} >
              <Text style={{
                fontWeight: '700', paddingHorizontal: 20,
                color: '#003c1a'
              }}>
                I am sorry, at the moment I am required to more projects.
                In here you will be able to find other people who will be interest
                to help you.
              </Text>
              <View style={styles.client}>
                <ScrollView horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <OtherPeople image={require('../assets/aBarbier.png')}
                    name="Babier"
                    job="Instructor PHP & Cybersecurity" />
                  <OtherPeople image={require('../assets/cChevalier.png')}
                    name="Chevalier"
                    job="Designer Manager" />
                  <OtherPeople image={require('../assets/fGrandjean.png')}
                    name="Grandjean"
                    job="Developper" />
                  <OtherPeople image={require('../assets/fThomas.png')}
                    name="Thomas"
                    job="Manager Fiverr" />
                  <OtherPeople image={require('../assets/lFlachs.png')}
                    name="Flachs"
                    job="Instructor JS" />
                  <OtherPeople image={require('../assets/pMur.png')}
                    name="Mur"
                    job="Instructor Data" />
                  <OtherPeople image={require('../assets/quentin.png')}
                    name="Quentin"
                    job="Developper & youtuber" />
                  <OtherPeople image={require('../assets/yBelfkih.png')}
                    name="Belfkih"
                    job="CEO" />
                </ScrollView>
              </View>
            </View>
          </ScrollView>
          <Text style={{ fontWeight: '700', marginTop: 10 }}> My recents works  </Text>
          <Text style={{ fontWeight: '50', marginTop: 10, color: 'rgb(25, 164, 99)' }}> A new selection of most popular pages choices </Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          <View >
            <View style={styles.groups}>
              <Image style={styles.work} source={require('../assets/imagTest1.jpg')} />
              <Image style={styles.work} source={require('../assets/imagTest2.jpg')} />
              <Image style={styles.work} source={require('../assets/imagTest3.jpg')} />
            </View>
            <View style={styles.groups}>
              <Image style={styles.work} source={require('../assets/imagTest4.jpg')} />
              <Image style={styles.work} source={require('../assets/imagTest3.jpg')} />
              <Image style={styles.work} source={require('../assets/imagTest1.jpg')} />
            </View>
            <View style={styles.groups}>
              <Image style={styles.work} source={require('../assets/imagTest2.jpg')} />
              <Image style={styles.work} source={require('../assets/imagTest4.jpg')} />
              <Image style={styles.work} source={require('../assets/imagTest3.jpg')} />
            </View>
            <View style={styles.groups}>
              <Image style={styles.work} source={require('../assets/imagTest2.jpg')} />
              <Image style={styles.work} source={require('../assets/imagTest4.jpg')} />
              <Image style={styles.work} source={require('../assets/imagTest3.jpg')} />
            </View>
            <View style={styles.groups}>
              <Image style={styles.work} source={require('../assets/imagTest2.jpg')} />
              <Image style={styles.work} source={require('../assets/imagTest4.jpg')} />
              <Image style={styles.work} source={require('../assets/imagTest3.jpg')} />
            </View>
            <View style={styles.groups}>
              <Image style={styles.work} source={require('../assets/imagTest2.jpg')} />
              <Image style={styles.work} source={require('../assets/imagTest4.jpg')} />
              <Image style={styles.work} source={require('../assets/imagTest3.jpg')} />
            </View>
            <View style={styles.groups}>
              <Image style={styles.work} source={require('../assets/imagTest2.jpg')} />
              <Image style={styles.work} source={require('../assets/imagTest4.jpg')} />
              <Image style={styles.work} source={require('../assets/imagTest3.jpg')} />
            </View>
          </View>
        </ScrollView>
        <Pressable style={styles.buttonAbsolute} onPress={() => console.log('buttonAbsolute')}>
          <Text > Buy & go </Text>
        </Pressable>
        <Button
          onPress={() => (console.log('Press'))}
          title="Pay & GO"
          style={styles.buttonAbsolute} />
      </View>
    </KeyboardAvoidingWrapper >
  );
}
