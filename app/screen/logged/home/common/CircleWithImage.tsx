import React from "react";
import { Image, Text, View } from "react-native";
import Svg, { Defs, Ellipse, LinearGradient, Stop } from "react-native-svg";
import DnaIcon from "../../../../../assets/images/ClinicHomeIcons/DNA.png";
import HospitalIcon from "../../../../../assets/images/ClinicHomeIcons/Hospital.png";
import MedicalRecordIcon from "../../../../../assets/images/ClinicHomeIcons/MedicalRecord.png";
import MedicalToolIcon from "../../../../../assets/images/ClinicHomeIcons/MedicalTools.png";

interface CircleWithImageProps {
  size?: number;
  bgType?: "purple" | "green" | "blue" | "orange";
  iconType?: "medicalTool" | "hospital" | "medicalRecord" | "dna";
  textIcon?: string;
  textStyle?: string;
}

// Фоны SVG
const IconPurple = () => (
  <Svg width="60" height="60" viewBox="0 0 57 57" fill="none">
    <Ellipse
      cx="28.0777"
      cy="28.0777"
      rx="28.0122"
      ry="28.0122"
      fill="url(#paint0_linear_742_2)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_742_2"
        x1="28.0777"
        y1="0.410934"
        x2="28.0777"
        y2="56.4109"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF95F4" />
        <Stop offset="1" stopColor="#AF70FF" />
      </LinearGradient>
    </Defs>
  </Svg>
);

const IconGreen = () => (
  <Svg width="60" height="60" viewBox="0 0 57 57" fill="none">
    <Ellipse
      cx="28.3881"
      cy="28.3881"
      rx="28.0122"
      ry="28.0122"
      fill="url(#paint0_linear_742_564)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_742_564"
        x1="28.3881"
        y1="0.410934"
        x2="28.3881"
        y2="56.4109"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#67F78F" />
        <Stop offset="1" stopColor="#03BB58" />
      </LinearGradient>
    </Defs>
  </Svg>
);

const IconBlue = () => (
  <Svg width="60" height="60" viewBox="0 0 57 57" fill="none">
    <Ellipse
      cx="28.2329"
      cy="28.2329"
      rx="28.0122"
      ry="28.0122"
      fill="url(#paint0_linear_742_169)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_742_169"
        x1="28.2329"
        y1="0.410934"
        x2="28.2329"
        y2="56.4109"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#6798F7" />
        <Stop offset="1" stopColor="#03B2BB" />
      </LinearGradient>
    </Defs>
  </Svg>
);

const IconOrange = () => (
  <Svg width="60" height="60" viewBox="0 0 57 57" fill="none">
    <Ellipse
      cx="28.0777"
      cy="28.0777"
      rx="28.0122"
      ry="28.0122"
      fill="url(#paint0_linear_742_32)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_742_32"
        x1="28.0777"
        y1="0.410934"
        x2="28.0777"
        y2="56.4109"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF9598" />
        <Stop offset="1" stopColor="#FFA370" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export const CircleWithImage: React.FC<CircleWithImageProps> = ({
  size = 100,
  bgType = "purple",
  iconType = "medicalTool",
  textIcon = "",
  textStyle = "",
}) => {
  let bgComponent;
  switch (bgType) {
    case "green":
      bgComponent = <IconGreen />;
      break;
    case "blue":
      bgComponent = <IconBlue />;
      break;
    case "orange":
      bgComponent = <IconOrange />;
      break;
    case "purple":
    default:
      bgComponent = <IconPurple />;
  }

  let iconComponent;
  switch (iconType) {
    case "medicalTool":
      iconComponent = (
        <Image source={MedicalToolIcon} style={{ width: 32, height: 28 }} />
      );
      break;
    case "hospital":
      iconComponent = (
        <Image source={HospitalIcon} style={{ width: 32, height: 28 }} />
      );
      break;
    case "medicalRecord":
      iconComponent = (
        <Image source={MedicalRecordIcon} style={{ width: 32, height: 28 }} />
      );
      break;
    case "dna":
      iconComponent = (
        <Image source={DnaIcon} style={{ width: 32, height: 28 }} />
      );
      break;
    default:
      iconComponent = (
        <Image source={MedicalToolIcon} style={{ width: 32, height: 28 }} />
      );
  }

  return (
    <View className="w-[80] h-[120] mr-3">
      <View className="w-[82] shadow-customIcon flex rounded-[8] gap-2 border border-custom-color-white p-[11] bg-custom-bg-white flex-col justify-center items-center ">
        <View className="w-[size] h-[size] justify-center items-center relative">
          <View className="relative">{bgComponent}</View>
          <View className="absolute justify-center items-center w-full h-full">
            {iconComponent}
          </View>
        </View>
        <Text
          className={`text-center  w-[48] text-xs leading-normal tracking-wide font-inter-regular text-custom-colorBlue ${textStyle}`}
        >
          {textIcon}
        </Text>
      </View>
    </View>
  );
};
