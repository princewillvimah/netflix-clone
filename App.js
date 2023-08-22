import {  StatusBar  } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Stack from './Stack';
import {StripeProvider} from '@stripe/stripe-react-native'
export default function App() {

  return (
   <>
    <StripeProvider publishableKey='pk_test_51NfNgPLUFKsikLUvWeQ65X39REXnFtrf6D7f1vghL06qbKrWJePzxfxuTlBb8vKmdZKg4uoRLwfk1br7jiWmePvE00saghJKp5'>
     <Stack/>
     <StatusBar style='light'/>
    </StripeProvider>
   </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
  },
});
