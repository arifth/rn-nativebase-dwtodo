import React, { useState } from "react";
import {
  Center,
  Button,
  VStack,
  Text,
  Input,
  Avatar,
  HStack,
} from "native-base";
import { View } from "react-native";
import TodoList from "../components/TodoList";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useQuery } from "react-query";
import { API } from "../config/Api";

export default function OnBoard({ navigation }) {
  const pp = require("../assets/pp.png");
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const { data: todoList } = useQuery("todoListCache", async () => {
    try {
      const response = await API.get("/courses?$lookup=*");

      return response.data;
    } catch (error) {
      console.log(error);
    }
  });
  console.log(JSON.stringify(todoList, null, 2));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
    // console.log(DateTimePickerAndroid);
  };

  return (
    <View>
      <VStack>
        <Center>
          <HStack>
            <VStack marginBottom={"20px"}>
              <Text
                width={"100%"}
                fontSize={"24px"}
                marginTop={"40px"}
                fontWeight={"bold"}
              >
                Hi radif
              </Text>
              <Text
                width={"80%"}
                fontSize={"16px"}
                color={"#FF5555"}
                marginBottom={"10px"}
              >
                200 List
              </Text>
            </VStack>

            <Avatar
              bg="green.500"
              source={pp}
              marginTop={"50px"}
              marginLeft={"220px"}
            >
              Radif
            </Avatar>
          </HStack>
          <Input
            backgroundColor={"#E5E5E5"}
            variant="outline"
            placeholder="Search List ..."
            width={"95%"}
            marginBottom={"10px"}
          />
          <HStack>
            <Button
              backgroundColor={"#E5E5E5"}
              variant="outline"
              placeholder="Choose Date"
              width={"30%"}
              marginBottom={"10px"}
              marginRight={"10px"}
              onPress={showDatepicker}
              title="Choose date "
            />

            <Input
              backgroundColor={"#E5E5E5"}
              variant="outline"
              placeholder="Category"
              width={"30%"}
              marginBottom={"10px"}
              marginRight={"10px"}
            />
            <Input
              backgroundColor={"#E5E5E5"}
              variant="outline"
              placeholder="Status"
              width={"30%"}
              marginBottom={"10px"}
            />
          </HStack>
          {todoList?.map((todo) => (
            <TodoList
              name={todo.name}
              category={todo.category.map((cat) => (
                <Text margin="10px">{cat.name}</Text>
              ))}
              date={todo.date}
              description={todo.description}
            />
          ))}
        </Center>
      </VStack>
    </View>
  );
}
