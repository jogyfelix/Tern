import { styled } from "@gluestack-style/react";
import { View } from "react-native";
import { Text } from "react-native";

const UserDetailsTile = ({
  name,
  question,
}: {
  name: string;
  question: string;
}) => {
  return (
    <ParentView>
      <View>
        <Question>{question}</Question>
        <Name>{name}</Name>
      </View>
      <Avatar />
    </ParentView>
  );
};

const ParentView = styled(View, {
  flexDirection: "row",
  justifyContent: "space-between",
});

const Name = styled(Text, {
  color: "$white",
  fontFamily: "LilyScriptOne-Regular",
  fontSize: 24,
});

const Question = styled(Text, {
  color: "$white",
  fontFamily: "Alata-Regular",
  fontSize: 20,
});

const Avatar = styled(View, {
  bg: "$primary",
  h: 48,
  w: 48,
  borderRadius: 48,
  marginTop: 6,
});
export default UserDetailsTile;
