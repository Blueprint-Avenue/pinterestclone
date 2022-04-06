import React from "react";
import { View } from "../components/Themed";
import { StyleSheet, Image, ScrollView, FlatList } from "react-native";
import Pin from "../components/Pin";

interface IMasonryList {
	pins: {
		id: string;
		image: string;
		title: string;
	}[];
}

const MasonryList = ({ pins }: IMasonryList) => {
	return (
		<ScrollView contentContainerStyle={{ width: "100%" }}>
			<View style={styles.container}>
				{/* Pins */}
				{/* first column */}
				<View style={styles.column}>
					{pins
						.filter((item, index) => index % 2 === 0)
						.map((pin) => (
							<Pin pin={pin} key={pin.id} />
						))}
				</View>
				{/* second column */}
				<View style={styles.column}>
					{pins
						.filter((item, index) => index % 2 === 1)
						.map((pin) => (
							<Pin pin={pin} />
						))}
				</View>
			</View>
		</ScrollView>
	);
};

export default MasonryList;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flexDirection: "row",
	},
	column: {
		flex: 1,
	},
});
