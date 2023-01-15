import { StyleSheet }   from "react-native";

export default function GoalItem(props){
    return(
        <View style={Styles.goalItem}>
            <Text style={styles.goalItem}>{itemData.item.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem:{
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: 'purple'
    },
    goalText:{
        color: 'white'
    }
})