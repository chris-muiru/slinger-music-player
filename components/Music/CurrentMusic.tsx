import { View, Text, Image, Button } from "react-native"
import React from "react"
import StepForward from "react-native-vector-icons/AntDesign"
import StepBackwards from "react-native-vector-icons/AntDesign"
import Pause from "react-native-vector-icons/Fontisto"
import tw from "twrnc"
const CurrentMusic = () => {
	return (
		<View style={tw`flex-1 flex-col bg-black`}>
			<View style={tw`rounded-md flex-1 mt-20 mx-auto`}>
				<Image
					source={require("../../assets/icon.png")}
					style={tw`w-[300px] h-[300px] rounded-xl`}
				/>
			</View>
			<View style={tw`flex-0.2 flex-row justify-between w-[70%] m-auto my-20`}>
				<StepBackwards
					name="stepbackward"
					style={tw`text-white text-2xl`}
				/>
				<View>
					<Pause name="pause" style={tw`text-white text-2xl`} />
				</View>
				<StepForward name="stepforward" style={tw`text-white text-2xl`} />
			</View>
		</View>
	)
}

export default CurrentMusic
