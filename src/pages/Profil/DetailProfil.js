import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import { ImgBackground } from "../../assets/images";
import { Color } from "../../utils/general";
import { detailProfil } from "../../utils/profil";

const Follow = () => {
  return (
    <ImageBackground source={ImgBackground} style={styles.image}>
      {detailProfil.map((detail, index) => {
        return (
          <View key={index} style={styles.content}>
            <Text style={styles.label}>{detail?.label}</Text>
            <View style={styles.listData}>
              <Image source={detail?.icon} style={styles.dataImage} />
              <View style={styles.data}>
                <Text style={styles.title}>{detail?.title}</Text>
                {detail?.subtitle && (
                  <Text style={styles.subtitle}>{detail?.subtitle}</Text>
                )}
                {detail?.date && (
                  <Text style={styles.subtitle}>{detail?.date}</Text>
                )}
              </View>
            </View>
          </View>
        );
      })}
    </ImageBackground>
  );
};

export default Follow;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  content: {
    marginHorizontal: 20,
    marginTop: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: Color.gray,
  },
  label: {
    fontSize: 16,
    fontWeight: "700",
    color: Color.green,
    textTransform: "capitalize",
    lineHeight: 19,
  },
  listData: {
    flexDirection: "row",
    alignItems: "center",
  },
  dataImage: {
    marginRight: 20,
  },
  data: {
    marginVertical: 10,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 16,
    color: Color.black,
    fontWeight: "400",
    lineHeight: 19,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: Color.black,
    fontWeight: "400",
    lineHeight: 16,
    textTransform: "capitalize",
  },
});
