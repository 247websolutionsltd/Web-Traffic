import { useState } from "react";
import { ScrollView } from "react-native";
import { useStyles } from "../../styles/styles";
import { Chip } from "./Chip";

export default function CategoryList(){
    const styles = useStyles();
    const FILTERS = ["All", "Buy", "Sell", "To let", "Jobs"];
    const [activeFilter, setActiveFilter] = useState("All");
    return(
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.chipRow}
            >
            {FILTERS.map((f) => (
                <Chip key={f} label={f} active={f === activeFilter} onPress={() => setActiveFilter(f)} />
            ))}
        </ScrollView>
)
}