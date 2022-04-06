import MasonryList from "../components/MasonryList";
import { RootTabScreenProps } from "../types";
import pins from "../assets/data/pins";

export default function HomeScreen({
	navigation,
}: RootTabScreenProps<"TabOne">) {
	return <MasonryList pins={pins} />;
}
