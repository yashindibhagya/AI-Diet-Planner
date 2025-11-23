import { UserContext } from "@/context/UserContext";
import { api } from "@/convex/_generated/api";
import { useConvex } from "convex/react";
import { useRouter } from "expo-router";
import { onAuthStateChanged } from 'firebase/auth';
import React, { useContext, useEffect } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Button from "../components/shared/Button";
import { auth } from '../config/FirebaseConfig';
import Colors from "../shared/Colors";

export default function Index() {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const convex = useConvex();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userInfo) => {
      if (userInfo?.email) {
        try {
          const userData = await convex.query(api.Users.GetUser, {
            email: userInfo.email
          });
          setUser(userData || null);
        } catch (error) {
          console.error('Error fetching user data:', error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
      router.replace('/(tabs)/Home');
    });
    return () => unsubscribe();
  }, [])


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={require("../assets/images/img/homescreen.png")}
        style={{
          width: "100%",
          height: Dimensions.get('screen').height
        }}
      />
      <View style={{
        position: "absolute",
        height: Dimensions.get('screen').height,
        backgroundColor: '#0707075e',
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: 20
      }}>
        <Image source={require("../assets/images/logo.png")}
          style={{
            width: 100,
            height: 100,
            marginTop: 100
          }} />

        <Text style={styles.text}>AI Diet Planner</Text>

        <Text style={styles.textPara}>Craft delicious, Healthy, meal lmans tailored just for you. Achieve your goal with ease!</Text>

      </View>

      <View style={styles.button}>
        <Button title={"Get Started"}
          onPress={() => router.push('/auth/SignIn')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.WHITE
  },
  textPara: {
    textAlign: "center",
    marginHorizontal: 20,
    fontSize: 20,
    color: Colors.WHITE,
    marginTop: 15,
    opacity: 0.8
  },
  button: {
    position: "absolute",
    width: "100%",
    bottom: 25,
    padding: 20
  }
})