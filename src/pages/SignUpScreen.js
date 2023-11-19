import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import {themeColors} from "../theme/colors";
import LottieView from 'lottie-react-native';import { ScrollView } from 'react-native';


export default function SignUpScreen() {
    const navigation = useNavigation();
    return (

        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <ArrowLeftIcon width={24} height={24} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.centerRow}>
                    <LottieView
                        source={require('../../assets/animations/register.json')}
                        autoPlay
                        loop
                        style={styles.animation}
                    />
                </View>
                <ScrollView>
                <View style={styles.formContainer}>
                    <View style={styles.form}>
                        <Text style={styles.label}>Full Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Enter Name'
                        />
                        <Text style={styles.label}>Email Address</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Enter Email'
                        />
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            placeholder='Enter Password'
                        />
                        <TouchableOpacity
                            style={styles.signUpButton}
                        >
                            <Text style={styles.signUpText}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.orText}>Or</Text>
                    <View style={styles.socialRow}>
                        <TouchableOpacity style={styles.socialButton}>
                            <Image source={require('../../assets/icons/google.png')}
                                   style={styles.socialIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialButton}>
                            <Image source={require('../../assets/icons/apple.png')}
                                   style={styles.socialIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialButton}>
                            <Image source={require('../../assets/icons/facebook.png')}
                                   style={styles.socialIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.signupRow}>
                        <Text style={styles.signupText}>Already have an account?</Text>
                        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                            <Text style={styles.signupLink}> Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: themeColors.bg,
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 20,
    },
    backButton: {
        backgroundColor: '#0bf5d9',
        padding: 10,
        borderRadius: 10,
    },
  centerRow: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
      right: 50,

},
    animation: {
        width: 200,
        height: 200,
    },
    formContainer: {
        flex: 2,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 20,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    form: {
        marginBottom: 20,
    },
    label: {
        color: '#4A4A4A',
        marginLeft: 10,
    },
    input: {
        padding: 10,
        backgroundColor: '#F2F2F2',
        color: '#4A4A4A',
        borderRadius: 10,
        marginBottom: 10,
    },
    signUpButton: {
        paddingVertical: 15,
        backgroundColor: themeColors.bg,
        borderRadius: 10,
    },
    signUpText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4A4A4A',
        textAlign: 'center',
    },
    orText: {
        fontSize: 20,
        color: '#4A4A4A',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 5,
    },
    socialRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    socialButton: {
        padding: 10,
        backgroundColor: '#F2F2F2',
        borderRadius: 10,
        marginHorizontal: 10,
    },
    socialIcon: {
        width: 40,
        height: 40,
    },
    signupRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    signupText: {
        color: '#9B9B9B',
        fontWeight: '600',
    },
    signupLink: {
        color: '#0bf5d9',
        fontWeight: '600',
    },
});