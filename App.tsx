import 'react-native-gesture-handler';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native"
import {Home} from "./src/screens/Home";
import {StackParamList} from "./src/types/reactNavigation";
import Profile from "./src/screens/Profile";
import {Provider} from "react-redux";
import {store} from "./src/store/store";

const Stack = createStackNavigator<StackParamList>()

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={"Home"}>
                    <Stack.Screen name={"Home"} component={Home}/>
                    <Stack.Screen name={"Profile"} component={Profile} initialParams={{userId: "losos"}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>

  );
}

