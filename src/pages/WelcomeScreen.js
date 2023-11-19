import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme/colors'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native';

export default function WelcomeScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Let's Get Started!
                </Text>
                <View style={styles.animationContainer}>
                    <LottieView
                        source={require('../../assets/animations/welcome.json')}
                        autoPlay
                        loop
                        style={styles.animation}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={()=> navigation.navigate('SignUp')}
                        style={styles.signUpButton}>
                        <Text style={styles.signUpText}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.loginContainer}>
                        <Text style={styles.loginText}>Already have an account?</Text>
                        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                            <Text style={styles.loginLink}> Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColors.bg,
    },
    content: {
        flex: 1,
        justifyContent: 'space-around',
        marginVertical: 16,
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 32,
        textAlign: 'center',
    },
    animationContainer: {
        alignItems: 'center',

    },
    image: {
        width: 350,
        height: 350,
    },
    buttonContainer: {
        marginVertical: 16,
    },
    signUpButton: {
        paddingVertical: 12,
        backgroundColor: '#ffffff',
        marginHorizontal: 28,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderWidth: 2,
        borderColor: 'black',
    },
    signUpText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'gray',
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    loginText: {
        color: 'white',
        fontWeight: '600',
    },
    loginLink: {
        fontWeight: '600',
        color: '#151515',
        textDecorationLine: 'underline',
    },
    animation: {
        width: 350,
        height: 350,
    },
});