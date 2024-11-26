import { IntroStackParamList, PropsNavigation } from "@/app/types/types";
import React, { useState } from "react";
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Conditions({
  navigation,
}: PropsNavigation<IntroStackParamList>) {
  const [infoCondition, setInfoCondition] = useState(false);
  const [swipeLine, setSwipeLine] = useState(false);

  const [nextLoad1] = useState(new Animated.Value(0));
  const [nextLoad2] = useState(new Animated.Value(0));

  const onInfoCondition = () => {
    setInfoCondition(!infoCondition);
  };

  const onSwapLine = () => {
    setSwipeLine(!swipeLine);

    Animated.parallel([
      Animated.timing(nextLoad1, {
        toValue: swipeLine ? 0 : 1,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(nextLoad2, {
        toValue: swipeLine ? 0 : 1,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start(() => {
      if (!swipeLine) navigation.navigate("Login");
    });
  };

  const lineLeft1 = nextLoad1.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 70],
  });

  const lineLeft2 = nextLoad2.interpolate({
    inputRange: [0, 1],
    outputRange: [85, 50],
  });

  return (
    <View style={style.container}>
      <Image
        style={style.upper}
        source={require("../../../assets/images/clinic-conditions/upperImg.png")}
      />
      <Image
        style={style.center}
        source={require("../../../assets/images/clinic-conditions/centerImg.png")}
      />
      <TouchableOpacity
        style={style.containerConditions}
        onPress={onInfoCondition}
      >
        <Text style={style.upperTextConditions}>Ознакомьтесь</Text>
        <Text style={style.loverTextConditions}>
          с политикой конфиденциальности и пользовательским соглашением
        </Text>
      </TouchableOpacity>

      {infoCondition && (
        <ScrollView style={style.infoContainer}>
          <Text style={style.titleConditions}>Общее полжения</Text>
          <Text style={style.conditionRoot}>
            Настоящая Политика конфиденциальности персональных данных (далее —
            «Политика») действует в отношении всей информации, которую Мобильное
            приложение Программа лояльности «Stars Coffee» (далее —
            «Приложение») может получить о пользователе во время использования
            им Приложения. Использование пользователем Приложения означает
            безоговорочное согласие пользователя с настоящей Политикой и
            указанными в ней условиями обработки его персональных данных; в
            случае несогласия с этими условиями пользователь должен воздержаться
            от использования Приложения и удалить его со своего мобильного
            устройства. Правообладателем Приложения и лицом, осуществляющим
            обработку персональных данных пользователя, является Общество с
            ограниченной ответственностью «Рецепт» (ОГРН 1227700440626, ИНН
            9724091665) юридическое лицо, уполномоченное на осуществление
            управления Приложением, осуществление взаимодействия с
            пользователями в процессе пользования ими Приложением (осуществление
            информационной поддержки пользователей), а также на совершение иных
            действий, связанных с использованием Приложения. При скачивании и
            установке Приложения, пользователь в полном объеме принимает условия
            настоящей Политики и выражает свое добровольное согласие на
            обработку своих персональных данных способом и в целях как это
            описано в настоящей Политике. ООО «Рецепт» оставляет за собой право
            по своему личному усмотрению изменять настоящую Политику без
            предварительного письменного уведомления пользователей при условии
            публикации новой редакции Политики по адресу:
            https://stars-coffee.ru за 10 (Десять) календарных дней до
            вступления таких изменений в силу. В случае если пользователь
            продолжает пользоваться Приложением после изменения Политики, это
            означает, что такие изменения приняты пользователем.
          </Text>
          <Text style={style.titleConditions}>
            1. Персональные данные пользователей, которые получает и
            обрабатывает Приложение.
          </Text>
          <Text style={style.conditionRoot}>
            1. В рамках настоящей Политики под «Персональными данными
            пользователя» понимаются: 1.1. Имя, фамилия, номер мобильного
            телефона, адрес электронной почты, передаваемые Пользователем при
            осуществлении им регистрации в Приложении либо авторизации в
            Приложении с использованием соответствующей учетной записи
            пользователя. 1.2. Персональные данные, которые пользователь
            предоставляет о себе самостоятельно при заполнении форм обратной
            связи в Приложении. 1.3. Информация о геолокации устройства
            пользователя. 1.4. Данные, которые автоматически передаются в
            процессе их использования с помощью установленного на устройстве
            пользователя программного обеспечения, в том числе IР-адрес,
            информация из файлов cookie, информация о браузере пользователя (или
            иной программе, с помощью которой осуществляется доступ к сервисам
            Приложения), информация об аппаратном и программном обеспечении
            устройства пользователя, время доступа, адреса запрашиваемых страниц
            и иная подобная информация. 2. Настоящая Политика применима только к
            Приложению. ООО «Рецеп» не контролирует и не несет ответственность
            за сайты и мобильные приложения третьих лиц, на которые пользователь
            может перейти по ссылкам, доступным в Приложении, в том числе в
            результатах поиска. На таких сайтах и в приложениях у пользователя
            могут собираться или запрашиваться иные персональные данные, а также
            могут совершаться иные действия. З. ООО «Рецеп» не проверяет
            достоверность предоставляемых пользователями персональных данных, не
            осуществляет контроль за дееспособностью пользователей. Приложение
            исходит из того, что при его использовании пользователь
            предоставляет достоверные и достаточные персональные данные, и
            поддерживает эту информацию в актуальном состоянии.
          </Text>
          <Text style={style.titleConditions}>
            2. Цели сбора и обработки персональных данных пользователей.
          </Text>
          <Text style={style.conditionRoot}>
            1 . Приложение собирает и хранит только те персональные данные
            пользователей, которые необходимы для предоставления и оказания
            услуг в рамках использования Приложения. 2. Приложение использует
            персональные данные пользователя в следующих целях: 2.1.
            Идентификация пользователя в целях пользования Приложением. 2.2.
            Идентификация пользователя в целях персонализащти контента,
            отображаемого для него в Приложении. 2.3. Отображение персональных
            данных в профиле пользователя. 2.4. Связь с пользователем, в том
            числе направление уведомлений, запросов и информации (в том числе,
            рекламной), касающихся использования Приложения, 2.5. Улучшение
            качества, удобства использования Приложения, разработка новых
            сервисо.
          </Text>
          <TouchableOpacity onPress={onInfoCondition}>
            <Text style={style.getOut}>Ознакомлен</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      <TouchableOpacity style={style.nextScreen} onPress={onSwapLine}>
        <Text style={style.nextScreenText}>Далее</Text>

        <Animated.View
          style={[style.bigLine, { left: lineLeft1 }]}
        ></Animated.View>
        <Animated.View
          style={[style.smallLine, { left: lineLeft2 }]}
        ></Animated.View>
      </TouchableOpacity>

      <Image
        style={style.lover}
        source={require("../../../assets/images/clinic-conditions/loverImg.png")}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: 812,
    margin: 0,
    padding: 0,
    backgroundColor: "#FFF",
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
  },

  animatedNext: {
    width: 60,
    height: 45,
    position: "absolute",
    top: 15,
  },

  bigLine: {
    width: 30,
    height: 7,
    backgroundColor: "#0089FF",
    position: "absolute",
    borderRadius: 50,
    top: 80,
    left: 50,
  },

  smallLine: {
    width: 14,
    height: 7,
    backgroundColor: "#0089FF",
    borderRadius: 50,
    position: "absolute",
    top: 80,
    left: 50,
  },

  upper: {
    width: "100%",
    height: 107,
    resizeMode: "cover",
  },

  center: {
    position: "absolute",
    top: 153,
  },

  lover: {
    width: "100%",
  },

  containerConditions: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: 262,
    height: 60,
    position: "absolute",
    top: 380,
  },

  upperTextConditions: {
    color: "#0ED4FF",
    fontSize: 15,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowRadius: 10,
    textShadowOffset: { width: 10, height: 10 },
    fontWeight: "700",
    marginBottom: 5,
  },

  loverTextConditions: {
    color: "#0460EA",
    fontSize: 15,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowRadius: 10,
    textShadowOffset: { width: 4, height: 4 },
    fontWeight: "700",
  },

  infoContainer: {
    zIndex: 2000,
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    padding: 10,
  },

  titleConditions: {
    fontSize: 20,
    fontWeight: 800,
    textAlign: "center",
    marginBottom: 15,
  },

  conditionRoot: {
    fontSize: 15,
    fontWeight: 500,
    textAlign: "left",
    maxWidth: "100%",
    marginBottom: 15,
  },

  getOut: {
    width: 150,
    height: 59,
    padding: 20,
    borderRadius: 50,
    backgroundColor: "#0089FF",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
    marginLeft: 110,
  },

  nextScreen: {
    width: 150,
    height: 60,
    position: "absolute",
    backgroundColor: "#0089FF",
    borderRadius: 50,
    top: 558,
    paddingTop: 17,
  },

  nextScreenText: {
    color: "white",
    fontSize: 18,
    fontWeight: 800,
    textAlign: "center",
  },
});
