import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Form } from "@/app/Form/Form";
import { Home } from "@/app/Home/Home";
import { Admin } from "@/app/Admin/Admin";
import { Game } from "@/app/Game/Game";
import { Users } from "@/app/Users/Users";


export type StackRoutesList ={
    home: undefined
    form: undefined
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
            {/*<Stack.Screen name="admin" component={Admin}/>
            <Stack.Screen name="game" component={Game}/>
            <Stack.Screen name="users" component={Users}/>*/}



        </Stack.Navigator>

    )
}