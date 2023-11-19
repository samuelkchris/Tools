import { StyleSheet } from 'react-native';
import {themeColors} from "../theme/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.bg,
  },
  safeArea: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  backButton: {
    backgroundColor: '#0bf5d9',
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  centerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    right: 20,
  },
    animation: {
    width: 300,
    height: 300,
    },
  formContainer: {
    flex: 2,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    paddingTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    margin: 20,
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
    marginTop: 10,
    marginLeft: 10,
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  forgotPassword: {
    color: '#4A4A4A',
    marginBottom: 20,
  },
  loginButton: {
    paddingVertical: 15,
    backgroundColor: themeColors.bg,
    borderRadius: 10,
  },
  loginButtonText: {
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
    marginBottom: 5,
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