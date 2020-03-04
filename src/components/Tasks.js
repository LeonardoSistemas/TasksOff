import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import commnonStyle from "../commonStyles";
import moment from "moment";
import "moment/locale/pt-br";

export default props => {
  const doneNotStyle =
    props.doneAt != null ? { textDecorationLine: "line-through" } : {};

  const date = props.doneAt ? props.doneAt : props.estimateAt;

  const formattedDate = moment(date)
    .locale("pr-br")
    .format("ddd, D [de] MMMM");

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => props.toggleTask(props.id)}>
        <View style={styles.checkContainer}>{getCheckView(props.doneAt)}</View>
      </TouchableWithoutFeedback>
      <View>
        <Text style={(styles.desc, doneNotStyle)}>{props.desc}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
    </View>
  );
};

function getCheckView(doneAt) {
  if (doneAt != null) {
    return (
      <View style={styles.done}>
        {<Icon name="check" size={20} color="#FFF" />}
      </View>
    );
  } else {
    return <View style={styles.peding} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: "#AAA",
    borderBottomWidth: 1,
    alignItems: "center",
    paddingVertical: 10
  },
  checkContainer: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center"
  },
  peding: {
    height: 25,
    width: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#555"
  },
  done: {
    height: 25,
    width: 25,
    borderRadius: 13,
    backgroundColor: "#4d7031",
    alignItems: "center",
    justifyContent: "center"
  },
  desc: {
    fontFamily: "Arial",
    color: commnonStyle.colors.mainText,
    fontSize: 15
  },
  date: {
    fontFamily: "Arial",
    color: commnonStyle.colors.subText,
    fontSize: 12
  }
});
