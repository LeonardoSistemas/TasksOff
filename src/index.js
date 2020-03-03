import { AppRegistry } from "react-native";
import TaskList from "./screens/TaskList";

AppRegistry.registerComponent("App", () => TaskList);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});
