import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import SignInWithOAuth from "./screens/SignInSignUp";
const CLERK_PUBLISHABLE_KEY = "pk_test_ZGVzdGluZWQtb3NwcmV5LTM4LmNsZXJrLmFjY291bnRzLmRldiQ"
export default function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <SafeAreaView style={styles.container}>
        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
          <SignInWithOAuth />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
