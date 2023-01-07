import { Image, Center, VStack, Text, Button, Input } from "native-base";
import React, { useState } from "react";
import { View } from "react-native";
const LoginImage = require("../assets/LoginIcon.png");
import { API } from "../config/Api";

export default function LoginForm({ navigation }) {
  const [form, addForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      // const data = JSON.stringify(form);
      const response = await API.post("/auth/login", form);
      if (response !== 0) {
        console.log(JSON.stringify(response.data, null, 2));
      }
      alert("login berhasil ye, " + response?.data.user.firstName);
      navigation.navigate("BottomTab");

      return response;
    } catch (error) {
      console.log(error);
      // alert("email atau password salah ");
    }
  };

  return (
    <View>
      <VStack>
        <Center>
          <Image
            source={LoginImage}
            style={{
              height: "45%",
              width: "80%",
              resizeMode: "contain",
            }}
            marginBottom={"20px"}
            marginTop={"20px"}
            alt="login"
          />

          <Text
            width={"80%"}
            marginBottom={"20px"}
            fontSize={"36px"}
            marginTop={"40px"}
            fontWeight={"bold"}
          >
            Login
          </Text>
          <Input
            variant="outline"
            placeholder="Email"
            width={"90%"}
            marginBottom={"20px"}
            onChangeText={(value) => addForm({ ...form, email: value })}
            value={form.email}
          />
          <Input
            type="password"
            variant="outline"
            placeholder="Password"
            width={"90%"}
            marginBottom={"40px"}
            onChangeText={(value) => addForm({ ...form, password: value })}
            value={form.password}
          />
          <Button
            width={"90%"}
            marginTop={"10px"}
            bgColor={"danger.600"}
            height={"50px"}
            marginBottom={"20px"}
            onPress={handleSubmit}
          >
            <Text fontWeight={"bold"} color={"muted.50"} fontSize={"24px"}>
              Login
            </Text>
          </Button>

          <Text>
            New Users ?
            <Text
              color={"#FF5555"}
              // onPress={() => navigation.navigate("Register")}
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </Text>
          </Text>
        </Center>
      </VStack>
    </View>
  );
}
