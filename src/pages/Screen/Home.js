import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  IcArticle,
  IcBtnCreate,
  IcCamera,
  IcMenu,
  IcReward,
  IcStar,
  ImgGirl,
} from "../../assets";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Card, ItemCard } from "../../components";
import { cards, itemCard } from "../../utils/home";
import { Color } from "../../utils/general";

const Home = ({ navigation }) => {
  const Tab = createBottomTabNavigator();
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={styles.mainImage}>
        <Image source={ImgGirl} style={styles.img} />
        <View style={styles.camera}>
          <Image source={IcCamera} />
        </View>
      </View>
      <View style={styles.mainChart}>
        <Image source={ImgGirl} style={styles.accountEllipse} />
        <View style={styles.titleContet}>
          <Text style={styles.title}>skylar vaccaro</Text>
          <View style={styles.contentStar}>
            <Image source={IcStar} />
            <Image source={IcStar} />
            <Image source={IcStar} />
            <Image source={IcStar} />
            <Image source={IcStar} />
          </View>
          <Text style={styles.author}>penulis | politisi</Text>
          <Text style={styles.quote}>"Hidup itu sederhana, kita yang</Text>
          <Text style={styles.quote}>membuatnya sulit."</Text>
        </View>
        <View style={styles.link3}>
          {itemCard.map((item, index) => (
            <ItemCard
              key={index}
              width={item.width}
              title={item.title}
              subtitle={item.subtitle}
              onPress={() => navigation.navigate(item.link)}
            />
          ))}
        </View>
      </View>
      <View style={styles.reward}>
        <View style={styles.rewardLeft}>
          <Image source={IcReward} />
          <View style={styles.rewardLeftText}>
            <Text style={styles.rewardTitle}>total poin anda</Text>
            <View style={styles.rewardLeft}>
              <Text style={styles.rewardTotal}>230</Text>
              <Text style={styles.rewardClaim}>Klaim reward</Text>
            </View>
          </View>
        </View>
        <View>
          <MaterialCommunityIcons
            name="chevron-right"
            color="#0D0D0D"
            size={30}
          />
        </View>
      </View>
      <View style={styles.mainProfile}>
        <Text>Lengkapi Profil Anda 2/3</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 17,
          }}
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              Material={card.material}
              name={card.name}
              title={card.title}
              type={card.type}
            />
          ))}
        </View>
      </View>
      <View style={{ position: "absolute", bottom: 27, right: 20 }}>
        <Image source={IcBtnCreate} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainImage: {
    position: "relative",
  },
  img: {
    width: "100%",
    resizeMode: "cover",
  },
  camera: {
    position: "absolute",
    width: 36,
    height: 36,
    backgroundColor: Color.green,
    right: 26,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 36,
    top: 15,
  },
  mainChart: {
    shadowColor: "#000",
    shadowOpacity: "25%",
    shadowOffset: 300,
    elevation: 2,
    backgroundColor: "#fff",
    marginHorizontal: 26,
    borderRadius: 7,
    marginTop: -22,
    marginBottom: 17,
  },
  accountEllipse: {
    width: 87,
    height: 87,
    borderRadius: 87,
    position: "absolute",
    top: -40,
    left: 16,
    resizeMode: "cover",
  },
  titleContet: {
    justifyContent: "center",
    alignItems: "center",
    margin: 17,
  },
  title: {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  contentStar: {
    flexDirection: "row",
    marginBottom: 24,
  },
  author: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "400",
  },
  quote: {
    fontSize: 14,
    marginTop: 3,
    fontWeight: "500",
    color: "#000",
    lineHeight: 16,
  },
  link3: {
    justifyContent: "space-evenly",
    color: "white",
    borderBottomEndRadius: 7,
    borderBottomStartRadius: 7,
    flexDirection: "row",
    paddingVertical: 8,
    backgroundColor: Color.green,
    marginBottom: 0,
  },
  reward: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 7,
    backgroundColor: Color.gray,
  },
  rewardLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  rewardLeftText: {
    marginLeft: 12,
  },
  rewardTitle: {
    fontSize: 14,
    fontWeight: "700",
    textTransform: "capitalize",
    color: Color.black,
  },
  rewardTotal: {
    fontSize: 16,
    color: Color.orange,
    fontWeight: "700",
  },
  rewardClaim: {
    fontSize: 14,
    color: Color.black,
    fontWeight: "700",
    marginLeft: 3,
  },
  mainProfile: {
    paddingHorizontal: 20,
    marginVertical: 15,
  },
});
