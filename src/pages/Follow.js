import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";

import { ImgBackground } from "../assets";
import ListFollow from "../components/molecules/ListFollow";
import { users } from "../utils/general";

const Follow = () => {
  return (
    <ScrollView style={styles.scroll}>
      <ImageBackground source={ImgBackground} style={styles.image}>
        <View style={styles.content}>
          {users.map((user, index) => (
            <ListFollow
              key={index}
              image={user.image}
              name={user.name}
              follow
            />
          ))}
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Follow;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
