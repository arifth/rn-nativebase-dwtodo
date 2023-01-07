import "react-native-gesture-handler";
import React from "react";
import Container from "./Container";
import { NativeBaseProvider } from "native-base";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <Container />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
