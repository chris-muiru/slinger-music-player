import { View, Text } from "react-native"
import React from "react"
import tw from "twrnc"
const Header = () => {
	return (
		<View style={tw`h-14 bg-[#1a1817] `}>
			<Text style={tw`text-white`}>Header</Text>
		</View>
	)
}

export default Header
