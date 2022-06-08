import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color } from "../../utils/general";

const ListFollow = ({ onPress, image, name, follow }) => {
  return (
    <View style={styles.list}>
      <View style={styles.listData}>
        <Image source={image} style={styles.listImage} />
        <Text style={styles.listText}>{name}</Text>
      </View>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>
          {follow ? "Mengikuti" : "Pengikut"}
        </Text>
      </Pressable>
    </View>
  );
};

export default ListFollow;

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.green,
    borderRadius: 35,
    paddingVertical: 6,
    paddingHorizontal: 8,
    marginBottom: 20,
  },
  listData: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 17,
  },
  listText: {
    fontSize: 15,
    color: Color.black,
    lineHeight: 21,
    fontWeight: "400",
  },
  button: {
    backgroundColor: Color.green,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 35,
  },
  buttonText: {
    fontSize: 15,
    color: Color.white,
    lineHeight: 21,
    fontWeight: "400",
  },
});
