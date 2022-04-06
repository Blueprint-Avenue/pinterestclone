import React, { useState } from "react";
import { View } from "../components/Themed";
import {
	StyleSheet,
	Image,
	ScrollView,
	FlatList,
	useWindowDimensions,
} from "react-native";
import Pin from "../components/Pin";

interface IMasonryList {
	pins: {
		id: string;
		image: string;
		title: string;
	}[];
}

const MasonryList = ({ pins }: IMasonryList) => {
	const width = useWindowDimensions().width;

	const numColumns = width < 500 ? 2 : 3;

	return (
		<ScrollView contentContainerStyle={{ width: "100%" }}>
			<View style={styles.container}>
				{/* Pins */}
				{Array.from(Array(numColumns)).map((_, colIndex) => (
					<View style={styles.column}>
						{pins
							.filter((item, index) => index % numColumns === colIndex)
							.map((pin) => (
								<Pin pin={pin} key={pin.id} />
							))}
					</View>
				))}
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
