import React, { useState, useEffect } from 'react';
import {
Text,
View,
FlatList,
Image,
StyleSheet,
TextInput,
TouchableOpacity,
StatusBar,
StackActions,
ActivityIndicator
} 
from 'react-native';
import {Card} from 'react-native-paper';
import { gaya } from '../assets/style';


const Home=({navigation}) => {
const [data, setdata] = useState([]);
const [text, settext] = useState('');
const [cari, setcari] = useState([]);

useEffect(() => {
fetch(
'https://raw.githubusercontent.com/GithubinAja/Buku-data/main/Buku.json'
)
.then((response) => response.json())
.then((hasil) => {
setdata(hasil.buku);
setcari(hasil.buku)
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
<Image style={gaya.cover} source={{ uri: item.img }}/>
<View style={{ marginTop: 10 }}>
<Text style={gaya.title}>{item.judul}</Text>
<Text style={gaya.teks}>Penerbit : {item.penerbit}</Text>
<Text style={gaya.teks}>Penulis : {item.Penulis}</Text>
<Text style={gaya.teks}>Jumlah Halaman :  {item.jmlHal}</Text>

</View>
</View>
</TouchableOpacity>
);
};

const caribuku = (text) => {
const newdata = cari.filter((item) => {
const itemdata = item.judul.toLowerCase();
const textdata = text.toLowerCase();
return itemdata.indexOf(textdata) > -1;
});
setdata(newdata);
settext(text);
};

return (
<View style={gaya.container}>

<Text
style={{
fontSize: 18,
fontWeight: 'bold',
textAlign: 'center',
color: 'white',
}}>
</Text>
<View style={gaya.teksinput}>
<TextInput
onChangeText={(text) => caribuku(text)}
value={text}
placeholder="Kata Kunci"
/>
</View>
<FlatList
data={data}
renderItem={listbuku}
keyExtractor={(item) => item.judul}
/>
</View>

);

}

export default Home;
