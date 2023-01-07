import * as React from "react";
import {
  Center,
  VStack,
  Text,
  Input,
  Heading,
  Button,
  HStack,
  Box,
} from "native-base";
import { View } from "react-native";

export default function AddCategory({ navigation }) {
  return (
    <View>
      <VStack>
        <Heading fontSize="30px" mt="10px" ml="10px" mb="10px">
          Add Category
        </Heading>
        <Center>
          <Input
            backgroundColor={"#E5E5E5"}
            variant="outline"
            placeholder="Name"
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
              Add Category
            </Text>
          </Button>
          <Heading fontSize="30px" mt="10px" mb="10px" mr="200px">
            List Category
          </Heading>
          <HStack mr="200px">
            <Box px="3" py="2" bg="primary.400" rounded="lg">
              <Text fontWeight="medium" color="white" fontSize="lg">
                study
              </Text>
            </Box>
          </HStack>
        </Center>
      </VStack>
    </View>
  );
}
