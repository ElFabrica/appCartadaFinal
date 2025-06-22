import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack"

import { Form } from "@/app/Form";
import { Home } from "@/app/home";

export type StackRoutesList ={
    home: undefined
    Form: undefined | {id: string}
    Admin: undefined
    Game: undefined
    Users: undefined

}

export type StackRoutesProps<T extends keyof StackRoutesList> = NativeStackScreenProps<StackRoutesList, T>

const Stack = createNativeStackNavigator<StackRoutesList>()

export function StacksRoutes() {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Form" component={Form}/>



        </Stack.Navigator>

    )
}