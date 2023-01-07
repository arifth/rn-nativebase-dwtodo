import { Image, Center, VStack, Text, Button } from "native-base";
import React from "react";
import { View } from "react-native";

const ImageLogin = require("../assets/login.png");

export default function Login({ navigation }) {
  return (
    <View>
      <VStack>
        <Center>
          <Image
            source={ImageLogin}
            style={{
              marginTop: "20%",
              height: "45%",
              width: "80%",
              resizeMode: "contain",
            }}
            alt="login"
          />
          <Text
            fontSize="5xl"
            fontWeight="bold"
            style={{ marginTop: 0 }}
            marginBottom={"10px"}
          >
            Ways
            <Text color={"secondary.900"}>
              To<Text color={"secondary.600"}>Do</Text>
            </Text>
          </Text>
          <Text width={"80%"} marginBottom={"50px"}>
            Write your activity and finish your activity. Fast, Simple and Easy
            to Use
          </Text>
          <Button
            width={"90%"}
            marginTop={"10px"}
            bgColor={"danger.600"}
            height={"50px"}
            onPress={() => navigation.navigate("Login")}
          >
            <Text fontWeight={"bold"} color={"muted.50"} fontSize={"24px"}>
              Login
            </Text>
          </Button>
          <Button
            width={"90%"}
            marginTop={"10px"}
            bgColor={"light.300"}
            height={"50px"}
            onPress={() => navigation.navigate("Register")}
          >
            <Text
              fontWeight={"bold"}
              color={"muted.50"}
              fontSize={"24px"}
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </Text>
          </Button>
        </Center>
      </VStack>
    </View>
  );
}
