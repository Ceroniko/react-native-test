import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  ActivityIndicator,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import {picturesFetch} from "../actions/picturesActions";

import DisplayAnImage from './DisplayAnImage'

const GalleryScreen = (props) => {

  useEffect(() => {
    props.getPictures();
  }, []);

  const showPictures = () => {
    return props.pictures.map((item, index) => {
          return <DisplayAnImage name={item.alt_description} author={item.user.username} uri={item.urls.full} key={index} navigation={props.navigation} />
        })
  };

  return (
    <View style={{flex:1}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1}} showsHorizontalScrollIndicator={true}>
        {props.fetching ? <ActivityIndicator size="large" /> : showPictures() }
      </ScrollView>
    </View>
  );
};

function mapStateToProps(state) {
    return {
        pictures: state.pictures,
        fetching: state.fetching,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPictures: () => {
            dispatch(picturesFetch())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryScreen);
