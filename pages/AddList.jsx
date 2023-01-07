import * as React from "react";
import {
  Center,
  VStack,
  Text,
  Input,
  Heading,
  Button,
  HStack,
} from "native-base";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Pp = require("../assets/pp.png");
const Eclipse = require("../assets/Ellipse.png");

const Tab = createBottomTabNavigator();

export default function AddList({ navigation }) {
  return (
    <View>
      <VStack>
        <Heading fontSize="30px" mt="10px" ml="10px" mb="10px">
          Add List
        </Heading>
        <Center>
          <Input
            backgroundColor={"#E5E5E5"}
            variant="outline"
            placeholder="Name"
            width={"95%"}
            marginBottom={"10px"}
          />
          <Input
            backgroundColor={"#E5E5E5"}
            variant="outline"
            placeholder="Category"
            width={"95%"}
            marginBottom={"10px"}
          />
          <Input
            backgroundColor={"#E5E5E5"}
            variant="outline"
            placeholder="Choose date"
            width={"95%"}
            marginBottom={"10px"}
          />
          <Input
            backgroundColor={"#E5E5E5"}
            variant="outline"
            placeholder="Description"
            width={"95%"}
            marginBottom={"10px"}
          />
          <Button
            width={"95%"}
            marginTop="10px"
            mb="30px"
            bgColor={"#FF5555"}
            height={"50px"}
            onPress={() => navigation.navigate("Register")}
          >
            <Text
              fontWeight={"bold"}
              color={"muted.50"}
              fontSize={"24px"}
              onPress={() => navigation.navigate("Register")}
            >
              Add List
            </Text>
          </Button>
        </Center>
      </VStack>
    </View>
  );
}
