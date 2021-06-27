// import React from 'react';
// import { StyleSheet,
//         View,
//         Text,
//         TouchableOpacity,
//         StatusBar,
//         ImageBackground,
//         } from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {useNavigation , NavigationContainer} from '@react-navigation/native';
// import PostForm from '../../postForm'

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'stretch',
//     },
//     button: {
//         alignItems: "center",
//         flex: 1,
//       },
//       footer: {
//         flexDirection: 'row',
//         position: "absolute",
//         bottom: 0,
//         alignItems: 'stretch',
//       },
//       image: {
//         flex: 1,
//         resizeMode: "cover",
//         justifyContent: "center"
//       },
//       buttons: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingBottom: 20,
//         height: 100,
//         width: '100%',
//         backgroundColor: 'rgba(152,226,245,0.3)',
//         flex: 1,
//         borderColor: 'black',
//         borderWidth: 1
//     },
//     buttonName: {
//         fontSize:20,
//         textAlign: 'center',
//         fontFamily: 'Arial',
//         padding: 2
//     }
// })

// const login = {
//     disable: false,
//     name:"ログイン",
//     message: "すでに会員の方",
//     onpress: ()=> console.log("Login")
//   }

//   const signUp = {
//     disable: false,
//     name: "新規会員登録",
//     message: "はじめての方",
//     onpress: ()=> console.log("SignUp")
//   }

// //初期表示
// function Main() {
//     const {navigate} = useNavigation();
//     return(
//         <>
//         <StatusBar barStyle="dark-content" />
//         <View style={styles.container}>
//             <ImageBackground source= {require('../public/BackgroundImage-Top.jpeg')} style={styles.image}>
//             <TouchableOpacity style={styles.buttons}
//             onPress= {() => {
//                 navigate('Post');
//             }}>
//                 <Text style={styles.buttonName}>{login.message}</Text>
//                 <Text style={styles.buttonName}>{login.name}</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.buttons}
//             onPress= {() => {
//                 navigate('Search');
//             }}>
//                 <Text style={styles.buttonName}>{signUp.message}</Text>
//                 <Text style={styles.buttonName}>{signUp.name}</Text>
//             </TouchableOpacity>
//             </ImageBackground>
//         </View>
//         </>
//     )
// }

// // サーチ画面コンポーネント
// function Search() {
//     return (
//         <View style= {styles.container}>
//             <Text>Search</Text>
//         </View>
//     )
// }

// // 投稿画面コンポーネント
// function Post() {
//     return(
//         <View style={styles.container}>
//             <PostForm />
//         </View>
//     )
// }

// //
// const Stack = createStackNavigator();
// function StackNavigator(){
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="Main" component={Main} />
//             <Stack.Screen name="Post" component={Post} />
//             <Stack.Screen name="Search" component={Search} />
//         </Stack.Navigator>
//     )
// }

// export default function() {
//     return (
//         <NavigationContainer>
//             <StackNavigator />
//         </NavigationContainer>
//     )
// }

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLOR} from '../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.MAIN,
  },
  text: {
    color: COLOR.WHITE,
  },
});

export default function Initial() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Initial</Text>
    </View>
  );
}
