import { Image, Center, VStack, Text, Button, Input } from "native-base";
import React from "react";
import { useState } from "react";
import { View } from "react-native";
import { API } from "../config/Api";

const LoginImage = require("../assets/LoginIcon.png");

export default function RegisterForm({ navigation }) {
  const [form, addForm] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    // console.log(form);
    try {
      // const data = JSON.stringify(form);
      const response = await API.post("/auth/register", form);
      console.log("test berhasil", response);
      return response;
    } catch (error) {
      alert("Proses register belum berhasil :(");
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
            marginTop={"10px"}
            alt="login"
          />

          <Text
            width={"80%"}
            marginBottom={"20px"}
            fontSize={"36px"}
            marginTop={"40px"}
            fontWeight={"bold"}
          >
            Register
          </Text>
          <Input
            variant="outline"
            placeholder="Name"
            width={"90%"}
            marginBottom={"10px"}
            onChangeText={(value) => addForm({ ...form, firstName: value })}
            value={form.firstName}
          />
          <Input
            variant="outline"
            placeholder="Email"
            width={"90%"}
            marginBottom={"10px"}
            onChangeText={(value) => addForm({ ...form, email: value })}
            value={form.email}
          />
          <Input
            type="password"
            variant="outline"
            placeholder="Password"
            width={"90%"}
            marginBottom={"20px"}
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
              Register
            </Text>
          </Button>

          <Text>
            Joined us before?
            <Text
              color={"#FF5555"}
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Text>
          </Text>
        </Center>
      </VStack>
    </View>
  );
}
