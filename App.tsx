import 'react-native-gesture-handler';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native"
import {Games} from "./src/screens/Games";
import {StackParamList} from "./src/types/reactNavigation";
import {Provider} from "react-redux";
import {store} from "./src/store/store";
import {Game} from "./src/screens/Game";

const Stack = createStackNavigator<StackParamList>()

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={"Games"}>
                    <Stack.Screen name={"Games"} component={Games}/>
                    <Stack.Screen name={"Game"} component={Game}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>

  );
}

