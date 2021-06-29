import React from 'react';
import {
  Image,
  StyleSheet,
  Pressable,
  Text,
  View,
  ScrollView,
} from 'react-native';


import KeyboardAvoidingWrapper from './KeyboardAvoingWrapper';
import FavoriteOn from './FavoriteOn';
import FavoriteOff from './FavoriteOff';
import OtherPeople from './OtherPeople';
import { Dimensions } from 'react-native';
let deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    marginBottom: 50,
    marginLeft: 15,
    alignItems: 'center',
  },
  intro: {
    backgroundColor: 'white',
    marginLeft: 5,
    marginRight: 5,
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
    marginTop: 45,
    borderRadius: 50
  },
  textSelection: {
    marginTop: 10,
    color: '#19a463'
  },
  works: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  groups: {
    flexDirection: 'row',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  work: {
    width: 130,
    height: 95,
    borderRadius: 15,
    marginTop: 5,
    marginRight: 5,
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
    position: "absolute",
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 50,
    width: 100,
    height: 50,
    alignSelf: 'center',
    borderRadius: 50,
    backgroundColor: '#003c1a',
    color: 'white',
    zIndex: 100,
  },
})

export default function ProfilPage() {
  const [favorite, setFavorite] = React.useState(false);
  let count = 0;
  //const [max, setMax] = React.useState('');

  return (
    <View>
      <Pressable style={styles.buttonAbsolute}
        onPress={() => {
          console.log("buttonAbsolute")
          console.log(count)
          count += 1
        }}>
        <Text style={{ color: 'white' }}> Buy & go </Text>
      </Pressable>
      <View>
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
                      <Text
                        style={{
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
                {count >= 10
                  ? (<Text style={{
                    fontWeight: '700',
                    paddingHorizontal: 10,
                    color: '#003c1a',
                    marginTop: 30,
                  }}>
                    I am sorry, at the moment I am required to more projects.
                    In here you will be able to find other people who will be interest
                    to help you.
                  </Text>)
                  : (<Text style={{
                    fontWeight: '700',
                    paddingHorizontal: 10,
                    color: '#003c1a',
                    marginTop: 30,
                  }}>
                    Following
                  </Text>)
                }
                {count >= 10
                  ? (<View style={styles.client}>
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
                  </View>)

                  : (
                    <View style={styles.client}>
                      <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}
                      >
                        <OtherPeople image={require('../assets/fiverr-logo-2.png')}
                          name="Fiverr"
                        />
                        <OtherPeople source={uri = 'https://media-exp3.licdn.com/dms/image/D4D35AQEJArwbYiLRIg/profile-framedphoto-shrink_800_800/0/1621951744699?e=1625086800&v=beta&t=AgiwM4AGhR9D0RSvN2dcSZmqALItB_PAEMSZeDGxViU'}
                          name="Dumitru"
                          job="Developper" />
                        <OtherPeople source={uri = 'https://media-exp3.licdn.com/dms/image/C4E03AQH5K55-8EZYpA/profile-displayphoto-shrink_400_400/0/1622451984217?e=1630540800&v=beta&t=2NHwRdkTOZ_IqM-RbpVn87ucVOz53UY2dq2msTddfng/'}
                          name="Leopold"
                          job="Front-End" />
                        <OtherPeople source={uri = 'https://media-exp3.licdn.com/dms/image/D4D35AQHbJl-Q_j0N7g/profile-framedphoto-shrink_400_400/0/1622880928103?e=1625086800&v=beta&t=TKMV-PosdnzRJ616bOqcVdIe2aEGGUMAdE-eiMqzo1M'}
                          name="Mário"
                          job="Developper" />
                      </ScrollView>
                    </View>)
                }


              </ScrollView>
              <Text style={{ fontWeight: '700', marginTop: 10 }}> My recents works  </Text>
              <Text style={styles.textSelection}> A new selection of most popular pages choices </Text>
              <View style={styles.works}>
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
                  <Image style={styles.work} source={require('../assets/imagTest1.jpg')} />
                  <Image style={styles.work} source={require('../assets/imagTest2.jpg')} />
                  <Image style={styles.work} source={require('../assets/imagTest3.jpg')} />
                </View>
                <View style={styles.groups}>
                  <Image style={styles.work} source={require('../assets/imagTest2.jpg')} />
                  <Image style={styles.work} source={require('../assets/imagTest4.jpg')} />
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
              </View>
            </View>
          </View>
        </KeyboardAvoidingWrapper >
      </View>
    </View >
  );
}
