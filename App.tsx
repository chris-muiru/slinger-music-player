import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, SafeAreaView } from "react-native"
import tw from "twrnc"
import Footer from "./components/Footer"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import CurrentMusic from "./components/Music/CurrentMusic"
import MusicGroup from "./components/Music/MusicGroup"

const Stack = createNativeStackNavigator()
export default function App() {
	return (
		<NavigationContainer>
			<View style={tw`flex-1 bg-black mt-10`}>
				<Header />
				<Stack.Navigator initialRouteName="CurrentSong">
					<Stack.Screen
						name="Home"
						component={Main}
						options={{ headerTitle: "" }}
					/>
					<Stack.Screen
						name="CurrentSong"
						component={CurrentMusic}
						options={{ headerTitle: "", header: () => <></> }}
					/>
				</Stack.Navigator>
				{/* <Main /> */}
				<Footer />
			</View>
		</NavigationContainer>
	)
}
