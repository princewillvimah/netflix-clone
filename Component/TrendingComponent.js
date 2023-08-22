import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

const TrendingComponent = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movieData = async () => {
      await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=420691a5522d50b54309a2a19774b077"
      )
        .then((response) => response.json())
        .then((data) => setMovies(data.results));
    };
    movieData();
  }, []);
  return (
    <View style={{marginTop:20}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.slice(0, 10).map((item, index) => (
          <TouchableOpacity key={index} style={{flexDirection:'row',alignItems:'center'}}>
            <Text
              style={{
                fontSize: 85,
                fontWeight: "bold",
                color: "white",
                position: "absolute",
                top: 40,
                right: 90,
                marginTop: 24,
                zIndex:5,
              }}
            >
              {index + 1}
            </Text>
            <Image
              style={{
                width: 105,
                height: 152,
                borderRadius: 6,
                resizeMode: "cover",
                margin: 10,
              }}
              source={{
                uri: `https://image.tmdb.org/t/p/original/${item?.poster_path}`,
              }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default TrendingComponent;

const styles = StyleSheet.create({});
