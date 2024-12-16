import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SelectDate = () => {
  return (
    <SafeAreaView>
      <View></View>
      <Text>Время</Text>
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
