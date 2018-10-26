import React from 'react'
import {View, Text} from 'react-native'
import UneAction from './UneAction'


const ListeActions = ({liste}) => {

    return (
        <View>
            {
                liste.map((val) => {
                    return (
                        <UneAction titre={val.titre}></UneAction>
                    )
                })
            }
        </View>
    )
}

export default ListeActions