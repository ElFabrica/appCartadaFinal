    export type RootStackParamList = {
        admin: undefined
        form: undefined
        game:undefined
        home: undefined
        users:undefined
    }

    declare global  {
        namespace ReactNavigation{
            interface RootParamList extends
            RootStackParamList {}
        }
    }