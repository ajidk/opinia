import { StyleSheet, Text, View } from "react-native";
import { Color } from "../../utils/general";

const Card = ({ type, Material, name, title }) => {
  return (
    <View>
      {type === "active" ? (
        <View style={styles.active}>
          <Material name={name} color={Color.white} size={30} />
        </View>
      ) : (
        <View style={styles.icon}>
          <Material name={name} color={Color.green} size={30} />
        </View>
      )}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  active: {
    backgroundColor: Color.green,
    padding: 15,
    borderRadius: 7,
  },
  icon: {
    borderWidth: 1,
    padding: 15,
    borderColor: Color.gray,
    borderRadius: 7,
  },
  text: {
    color: Color.green,
    textAlign: "center",
    textTransform: "capitalize",
    marginTop: 3,
  },
});
