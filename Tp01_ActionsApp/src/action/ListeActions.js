import React from 'react'
import {View, Text} from 'react-native'
import UneAction from './UneAction'


const ListeActions = ({liste}) => {

    return (
        <View>
            {
                liste.map((val, key) => {
                    return (
                        <UneAction titre={val.titre}></UneAction>
                    )
                })
            }
            <Text>Ici prochainement une liste d'actions</Text>
        </View>
    )
}

export default ListeActions