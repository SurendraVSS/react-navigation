import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Button, ScrollView } from 'react-native';
import { useState } from 'react'
export default function App() {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.container}>
    {
        modalVisible ? null : <Button
          title='Show Pop Up'
          onPress={() => setModalVisible(true)}
        />
    }
   
      <Modal
        visible={modalVisible}
        
        transparent={true}
      >
      <View
            style={styles.modal}
          >
      <ScrollView>
          
            <Button
              title="close"
              onPress={() => setModalVisible(false)}
            />
            <Text>hello</Text>
            <Text>hello</Text>
            <Text>hello</Text>
            <Text>hello</Text>
            <Text>hello</Text>
            <Text>hello</Text>
            <Text>hello</Text>
            <Text>hello</Text>
            <Text>hello</Text>
            <Text>hello</Text>
            <Text>hello</Text>
            <Text>hello</Text>
            <Text>hello</Text>
            <Text>hello</Text>
            <Text>hello</Text>
            <Text>hello</Text>
         
      </ScrollView>
        </View>
    
      </Modal>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',

  },
  modal:{
    width: '80%',
    
    height: '20%',
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems: 'center',
    marginTop:150,
    marginLeft:30
  }
});
