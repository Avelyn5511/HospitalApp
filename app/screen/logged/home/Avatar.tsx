import { RootState } from "@/app/redux/store";
import { Image } from "react-native";
import { useSelector } from "react-redux";

const Avatar = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const avatar = user?.avatar;

  return avatar ? (
    <Image
      source={{ uri: `data:image/png;base64,${avatar}` }}
      style={{ width: 50, height: 50, borderRadius: 25 }}
    />
  ) : (
    <Image
      source={require("../../../../assets/images/clinic-home/IconProfile.png")}
      style={{ width: 50, height: 50, borderRadius: 25 }}
    />
  );
};

export default Avatar;
