import { StyleSheet, Image, ScrollView } from "react-native";
import MasonryList from "../components/MasonryList";
import { Text, View } from "../components/Themed";
import pins from "../assets/data/pins";
import { Entypo, Feather } from "@expo/vector-icons";

export default function ProfileScreen() {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>
				<View style={styles.icons}>
					<Feather name="share" size={24} color="#181818" style={styles.icon} />
					<Entypo
						name="dots-three-horizontal"
						size={24}
						color="#181818"
						style={styles.icon}
					/>
				</View>
				<Image
					source={{
						uri: "https://i.pinimg.com/originals/1e/28/6c/1e286c364663b1593313bcbc49518703.jpg",
					}}
					style={styles.image}
				/>
				<Text style={styles.title}>Samiya McIntosh</Text>
				<Text style={styles.subTitle}>123 Followers | 534 Followings</Text>
			</View>
			<MasonryList pins={pins} />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		margin: 10,
	},
	subTitle: {
		color: "#181818",
		fontWeight: "600",
		margin: 20,
	},
	image: {
		width: 200,
		aspectRatio: 1,
		borderRadius: 200,
		marginVertical: 10,
	},
	header: {
		alignItems: "center",
	},
	icon: {
		paddingHorizontal: 10,
	},
	icons: {
		flexDirection: "row",
		alignSelf: "flex-end",
		padding: 10,
	},
});
