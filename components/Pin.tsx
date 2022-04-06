import { StyleSheet, Image, Pressable } from "react-native";
import { Text, View } from "../components/Themed";
import { AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Navigation from "../navigation";

const Pin = (props) => {
	const { id, image, title } = props.pin;

	const [ratio, setRatio] = useState(1);
	const navigation = useNavigation();

	useEffect(() => {
		if (image) {
			Image.getSize(image, (width, height) => setRatio(width / height));
		}
	}, [image]);

	const onLike = () => {};

	const goToPinPage = () => {
		navigation.navigate("Pin", { id });
	};
	return (
		<Pressable onPress={goToPinPage} style={styles.pin}>
			<View>
				<Image
					style={[styles.image, { aspectRatio: ratio }]}
					source={{
						uri: image,
					}}
				/>
				<Pressable onPress={onLike} style={styles.heartBtn}>
					<AntDesign name="hearto" size={17} color="white" />
				</Pressable>
			</View>

			<Text style={styles.title} numberOfLines={2}>
				{title}
			</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
	},
	title: {
		fontSize: 16,
		lineHeight: 22,
		fontWeight: "600",
		margin: 5,
		color: "#181818", // "#181818"
	},
	image: {
		width: "100%",
		borderRadius: 25,
		aspectRatio: 1 / 2,
	},
	pin: {
		width: "100%",
		padding: 4,
	},
	heartBtn: {
		backgroundColor: "#D3CFD4",
		position: "absolute",
		bottom: 10,
		right: 10,
		padding: 5,
		borderRadius: 15,
	},
});

export default Pin;
