import { View, Text } from "react-native"
import React from "react"
import tw from "twrnc"
import Play from "react-native-vector-icons/AntDesign"
const Music = () => {
	return (
		<View style={tw`flex-1 flex-row gap-10 m-2 rounded-sm p-8 items-center bg-[#1a1817]`}>
			<Play name="play" style={tw`mr-10 text-xl text-white`} />
			<Text style={tw`text-white`}>Music</Text>
		</View>
	)
}

export default Music
