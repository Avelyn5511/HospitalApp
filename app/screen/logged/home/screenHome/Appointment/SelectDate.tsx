import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SelectDate = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("date");

  const onChange = (event: any, selectedDate: any) => {
    setDate(selectedDate);
    setOpen(false);
  };

  const showMode = (modeToShow: any) => {
    setOpen(!open);
    setMode(modeToShow);
  };

  return (
    <SafeAreaView>
      <Button title="Show Date Picker" onPress={() => showMode("date")} />
      {open && (
        <DateTimePicker
          value={date}
          onChange={onChange}
          mode="date"
          display="inline"
        />
      )}

      <Text>{date.toLocaleDateString()}</Text>
      <View>
        <TouchableOpacity></TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text>Записаться</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SelectDate;
