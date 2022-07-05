import React from 'react';
import {
Text,
View,
Image,
StyleSheet,
Button,
ImageBackground,
ScrollView,
}from 'react-native';
import { gaya } from '../assets/style';
const Detail = ({ route }) => {
const { buku } = route.params;
return (

<View style={gaya.container}>
<ImageBackground style={gaya.cover2} source={{ uri: buku.img }} />
<View>
<Image style={gaya.cover1} source={{ uri: buku.img }} />
</View>
<ScrollView>
<View>
<Text style={gaya.title1}>{buku.judul}</Text>
<Text style={gaya.title3}>{buku.Penulis}</Text>
</View>
<View>
<Text style={gaya.title2}>{buku.description}</Text>
</View>
</ScrollView>
</View>

);
};

export default Detail;
