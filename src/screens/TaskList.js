import React, { Component } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import TodayImage from "../assets/imgs/today.jpg";
import moment from "moment";
import "moment/locale/pt-br";
import commonStyles from "../commonStyles";
import Task from "../components/Tasks";

export default class TaskList extends Component {
  render() {
    const today = moment()
      .locale("pt-br")
      .format("dddd, d [de] MMMM");
    return (
      <View style={styles.container}>
        <ImageBackground source={TodayImage} style={styles.taskList}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          <Task
            desc="Comprar Livro React"
            estimateAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Ler Livro React" estimateAt={new Date()} doneAt={null} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 3
  },
  taskList: {
    flex: 7
  },
  titleBar: {
    flex: 1,
    justifyContent: "flex-end"
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    marginLeft: 20,
    marginBotton: 20,
    fontSize: 50
  },
  subtitle: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    marginLeft: 20,
    marginBotton: 30,
    fontSize: 20
  }
});
