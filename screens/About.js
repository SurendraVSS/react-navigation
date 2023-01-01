import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const About = ({ navigation }) => {
    return (
        <View>
            <Text>About</Text>

            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center', marginTop: 150,

                }}>
                    <Text style={{ backgroundColor: 'red', padding: 10, borderRadius: 10 }}> Go to home Screen</Text>
                </View>

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({})

export default About;
