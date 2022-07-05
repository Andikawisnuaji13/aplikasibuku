import { StyleSheet } from 'react-native';

const gaya = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E90FF',
    alignItems: 'center',
  },
  
  container1: {
  
    alignItems: 'center',
  },

  listitem: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    flexDirection: 'row',
  },
  cover: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
   cover1: {
    width: 180,
    height: 250,
     marginTop: 15,
     
     
  },
   cover2: {
    width: 360,
    height: 570,
    flex: 1,
     opacity: 0.5,
  },
  
  title: {
    fontSize: 16,
    width: 220,
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 15,
  },
    title1: {
    fontSize: 16,
    width: 220,
    fontWeight: 'bold',
    padding: 1,
    marginBottom: 1,
    textAlign: "center",
  },
  title2: {
    fontSize: 16,
    width: 220,
    fontWeight: 'bold',
    paddingLeft: 20,
    marginBottom: 1,
    textAlign: "left",
  },
   title3: {
    fontSize: 16,
    width: 220,
    fontWeight: 'bold',
    padding: 1,
    marginBottom: 40,
    textAlign: "center",
  },
  teks: {
    fontSize: 14,
    width: 200,
    paddingLeft: 10,
  },
  teks1: {
    fontSize: 14,
    
    paddingLeft: 20,
  },
  teksinput: {
    backgroundColor: '#fff',
    padding: 5,
    marginVertical: 5,
    borderRadius: 20,
    paddingHorizontal: 50,
    borderWidth: 1,
    borderColor: '#F9813A',
  },
});
export { gaya };
