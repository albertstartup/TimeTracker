import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { displayStartDate, generateStartDate } from "./lib";

const MyText = (props: { children: any }) => {
  const styles = StyleSheet.create({
    container: {
      fontSize: 17,
    },
  });

  return <Text style={styles.container}>{props.children}</Text>;
};

export default function App() {
  const [datePickerVisibility, setDatePickerVisibility] = useState(false);
  const [startDate, setStartDate] = useState(generateStartDate());
  const [description, setDescription] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    hideDatePicker();
  };

  const handleSave = () => {
    console.log("findme");
  };

  const handleDescriptionChange = (description: string) => {
    console.log(description);
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <>
        <MyText>Time</MyText>
        <DateTimePickerModal
          mode="time"
          isVisible={datePickerVisibility}
          date={startDate}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          minuteInterval={5}
        />
        <Button title="Show Date Picker" onPress={showDatePicker} />
        <MyText>{displayStartDate(JSON.stringify(startDate))}</MyText>
      </>
      <>
        <MyText>Description</MyText>
        <TextInput
          style={styles.input}
          placeholder="Description"
          onChangeText={handleDescriptionChange}
        />
        <Button title="enter" onPress={handleSave} />
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: 'center',
  },
  input: {
    borderColor: "lightgrey",
    borderWidth: 1,
  },
});
