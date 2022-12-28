import { View, Text } from "react-native"
import React from "react"
import Home from "react-native-vector-icons/AntDesign"
import tw from "twrnc"
const Footer = () => {
	return (
		<View
			style={tw`absolute bottom-0 w-full p-3 flex flex-row justify-around text-white bg-black`}
		>
			{/* <View>
				<BiHome />
			</View>
			<View>
				<BiHome />
			</View>*/}
			<View style={tw`flex items-center justify-center`}>
				<Home name="home" size={20} style={tw`text-white`} />
				<Text style={tw`text-white`}>home</Text>
			</View>
			<View style={tw`flex items-center justify-center text-sm`}>
				<Home name="home" style={tw`text-white`} size={20} />
				<Text style={tw`text-white`}>playlist</Text>
			</View>
			<View style={[tw`flex items-center justify-center text-sm`]}>
				<Home name="home" size={20} style={tw`text-white`} />
				<Text style={tw`text-white`}>Settings</Text>
			</View>
			<View style={[tw`flex items-center justify-center text-sm`]}>
				<Home name="home" size={20} style={tw`text-white`} />
				<Text style={tw`text-white`}>folders</Text>
			</View>
		</View>
	)
}

export default Footer
