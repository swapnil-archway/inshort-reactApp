import React, { useContext } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { categories, sources } from "../API/api";
import { NewsContext } from "../API/Context";
import Search from "../components/Search";

const DiscoverScreen = () => {
  const windowWidth = Dimensions.get("window").width;
  const SLIDE_WIDTH = Math.round(windowWidth / 3.5);

  const { setCategory, setSource, darkTheme } = useContext(NewsContext);

  return (
    <View className="p-5 items-center">
      <Search />
      <Text
        className="text-[20px] font-bold pb-1 border-y-5 border-b-[#007FFF] self-start rounded-[10px]"
        style={{ color: darkTheme ? "white" : "black" }}
      >
        Categories
      </Text>
      <Carousel
        layout={"default"}
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => setCategory(item.name)}
              className="h-[130] items-center justify-evenly"
            >
              <Image
                source={{ uri: item.pic }}
                className="h-[80%] w-[80%]"
                style={{ resizeMode: "contain" }}
              />
              <Text
                className="text-[14px] capitalize "
                style={{ color: darkTheme ? "white" : "black" }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
        sliderWidth={windowWidth}
        itemWidth={SLIDE_WIDTH}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />
      <Text
        className="text-[20px] mt-3 font-bold pb-1 border-y-5 border-b-[#007FFF] self-start rounded-[10px]"
        style={{ color: darkTheme ? "white" : "black" }}
      >
        Sources
      </Text>
      <View className="flex-row flex-wrap justify-around py-[15]">
        {sources.map((s) => (
          <TouchableOpacity
            onPress={() => setSource(s.id)}
            key={s.id}
            className="h-[150] w-[40%] m-[15] bg-[##cc313d] rounded-[10px]"
          >
            <Image
              source={{ uri: s.pic }}
              style={{ resizeMode: "cover" }}
              className="h-[100%] rounded-[10px]"
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default DiscoverScreen;
