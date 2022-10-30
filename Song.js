import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
  } from 'react-native';
  
import millisToMinutesAndSeconds from './utils/millisToMinutesAndSeconds'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Song({ name, artists, album, track_number, imageUrl, duration  }) {  //add in the other features to be displayed
    
    return (
      <View style={styles.songView}>
        <Text style={styles.rank} numberOfLines={1}>{track_number}</Text>

        <Image style={styles.image} source={{ uri: imageUrl}}/>
        
        <View style={styles.songContainer}>
          <Text style={styles.track} numberOfLines={1}>{name}</Text>
          <Text style={styles.artist} numberOfLines={1}>{artists}</Text>
        </View>

        <Text style={styles.album} numberOfLines={1}>{album}</Text>
        
        <Text style={styles.duration} numberOfLines={1}>{millisToMinutesAndSeconds(duration)}</Text>
      </View>
    );
  }
 
  const styles = StyleSheet.create({
    track: {
      fontSize: 15,
      color: 'white',
      margin: 3,
    },
    songContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: windowWidth * 0.40,
    },
    artist: {
      fontSize: 14,
      color: 'white',
      margin: 3,
    },
    songView : {
      flexDirection: 'row',
      margin: 3,
      alignItems: 'center',
      width: windowWidth * 0.965,
      height: windowHeight * 0.08,
      justifyContent:'space-between'
    },
    duration: {
      fontSize: 15,
      color: 'white',
      margin: 3,
      width: windowWidth * 0.10,
      // resizeMode:'contain',
    },
    rank: {
      fontSize: 15,
      color: 'white',
      margin: 3,
      width: windowWidth * 0.038,
    },
    album: {
      fontSize: 15,
      color: 'white',
      margin: 3,
      width: windowWidth * 0.225,
    },
    image: {
      width: 60,
      height: 60,
      resizeMode: 'contain',
    },
  });