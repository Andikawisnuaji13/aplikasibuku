import React, { useState, useEffect } from 'react';
import {
Text,
View,
FlatList,
Image,
StyleSheet,
TextInput,
TouchableOpacity
} from 'react-native';
import { gaya } from '../assets/style';
const Best=({navigation}) => {
const [data, setdata] = useState([]);
useEffect(() => {
fetch(
'https://raw.githubusercontent.com/GithubinAja/best-buku-data/main/Bestbuku.json'
)
.then((response) => response.json())
.then((hasil) => {
setdata(hasil.bestbuku);
})
.catch((error) => {
console.log;
});
}, []);

const listbuku = ({ item }) => {
return (
<TouchableOpacity onPress={() =>
navigation.navigate('Detail',{buku:item})}>
<View style={gaya.listitem}>
<Image style={gaya.cover} source={{ uri: item.img }}></Image>
<View style={{ marginLeft: 5 }}>
<Text style={gaya.title}>{item.judul}</Text>
<Text style={gaya.teks}>Penerbit : {item.penerbit}</Text>
<Text style={gaya.teks}>Penulis : {item.Penulis}</Text>
<Text style={gaya.teks}>Jumlah Halaman :  {item.jmlHal}</Text>
</View>
</View>
</TouchableOpacity>
);
};
return (
<View style={gaya.container}>
<FlatList
data={data}
renderItem={listbuku}
keyExtractor={(item) => item.judul}
/>
</View>
);
}
export default Best;
