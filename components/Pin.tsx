import { StyleSheet, Image, Pressable } from "react-native";
import { Text, View } from "../components/Themed";
import { AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";

const Pin = (props) => {
	const { image, title } = props.pin;

	const [ratio, setRatio] = useState(1);

	useEffect(() => {
		if (image) {
			Image.getSize(image, (width, height) => setRatio(width / height));
		}
	}, [image]);

	const onLike = () => {};
	return (
		<View style={styles.pin}>
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

			<Text style={styles.title}>{title}</Text>
		</View>
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
		fontSize: 20,
		fontWeight: "bold",
		margin: 10,
	},
	image: {
		width: "100%",
		borderRadius: 25,
		aspectRatio: 1 / 2,
	},
	pin: {
		width: "100%",
	},
	heartBtn: {
		backgroundColor: "#D3CFD4",
		position: "absolute",
		bottom: 10,
		right: 10,
		padding: 5,
		borderRadius: 50,
	},
});

export default Pin;
