import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Form } from "@/app/Form";
import { Home } from "@/app/home";
import { Admin } from "@/app/Admin";


export type StackRoutesList ={
    home: undefined
    form: undefined | {id: string}
    admin: undefined
    game: undefined
    users: undefined

}

export type StackRoutesProps<T extends keyof StackRoutesList> = NativeStackScreenProps<StackRoutesList, T>

const Stack = createNativeStackNavigator<StackRoutesList>()

export function StacksRoutes() {
    return(
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={Home}/>
            <Stack.Screen name="form" component={Form}/>



        </Stack.Navigator>

    )
}