import React from "react";
import { Center, VStack, Text, Box, HStack, Heading, Image } from "native-base";
const Eclipse = require("../assets/Ellipse.png");

export default function TodoList({ name, category, date, description }) {
  return (
    <Center marginBottom="20px" width="95%">
      <Box
        bgColor={"#DAEFFF"}
        width={"95%"}
        padding={"10px"}
        borderRadius={"10px"}
      >
        <HStack>
          <VStack marginRight={"5px"}>
            <Heading size="md" ml="-1" mb="10px">
              {name}
            </Heading>
            <Text fontSize="10px" fontWeight="500" mb="10px" color="#9B9B9B">
              {description}
            </Text>
            <Text color="#9B9B9B">{date}</Text>
          </VStack>
          <VStack marginLeft="auto">
            <Text
              marginBottom={"10px"}
              bg="#81C8FF"
              color="#FFFFFF"
              borderRadius="sm"
              p="5px"
              mr="30px"
            >
              {category}
            </Text>
            <Image
              source={Eclipse}
              height={"50px"}
              width={"50px"}
              alt="eclipse"
            />
          </VStack>
        </HStack>
      </Box>
    </Center>
  );
}
