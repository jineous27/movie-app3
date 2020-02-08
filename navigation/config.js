
import { createStackNavigator } from "react-navigation-stack";
import { BG_COLOR, WHITE } from "../constants/Colors";

export const headerStyles = {
    headerStyle: {
        backgroundColor: BG_COLOR,
        borderBottomColor: 0
    },
    headerTitleStyle: {
        color: WHITE
    },
    headerTintColor: WHITE
};

export const createStack = (screen, title) =>
    createStackNavigator({
        screen: {
            screen,
            navigationOptions: {
                title,
                ...headerStyles
            }
        }
    });
