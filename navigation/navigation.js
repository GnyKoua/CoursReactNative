import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../components/home';
import { Screen1 } from '../components/screen1';
import { Screen2 } from '../components/screen2';

const Stack = createStackNavigator();

export const MyNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Screen1" component={Screen1} />
            <Stack.Screen name="Screen2" component={Screen2} />
        </Stack.Navigator>
    );
}

