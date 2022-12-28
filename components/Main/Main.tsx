import { StyleSheet, Text, ScrollView, View } from "react-native"
import React from "react"
import Footer from "../Footer"
import tw from "twrnc"
import MusicGroup from "../Music/MusicGroup"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
const Main = () => {
	return (
		<ScrollView style={tw`flex-0.9`}>
				<MusicGroup />
				{/* <CurrentMusic /> */}
		</ScrollView>
	)
}

export default Main
