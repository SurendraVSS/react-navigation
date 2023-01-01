import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';


const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <Text>Home screen</Text>

            <TouchableOpacity
            onPress={() => navigation.navigate('about')}
            >
            <View style={{
                justifyContent:'center',
                alignItems:'center',marginTop:150,
               
            }}>
                    <Text style={{ backgroundColor: 'red',padding:10,borderRadius:10 }}> Go to About Screen</Text>
            </View>
               
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

})

export default HomeScreen;
