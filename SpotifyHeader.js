import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
  } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SpotifyHeader() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/spotify-logo.png')} />
        <Text style={styles.name}>
          My Top Tracks
        </Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      margin: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width:windowWidth * 0.965,
      height:windowHeight * 0.06,
    },
    name: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
    },
    logo: {
      height: 30,
      width: 30,
      margin: 8,
    }
  });
  