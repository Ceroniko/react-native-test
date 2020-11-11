import React from 'react';
import {
  View,
} from 'react-native';

import FullSizePicture from './FullSizePicture'

const FullSizePictureScreen = (props) => {
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", height: "100%"}}>
      <FullSizePicture name={props.route.params.name} author={props.route.params.author} uri={props.route.params.uri} />
    </View>
  );
};

export default FullSizePictureScreen;
