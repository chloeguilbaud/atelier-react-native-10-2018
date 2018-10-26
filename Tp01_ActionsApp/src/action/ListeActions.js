import React from 'react'
import {View, Text} from 'react-native'
import UneAction from './UneAction'


const ListeActions = ({liste, onTerminer, onSupprimer}) => {

    return (
        <View>
            {
                liste.map((val, index) => {
                    return (
                        <UneAction key={index.toString()} onTerminer={() => onTerminer(index)} onSupprimer={() => onSupprimer(index)} title={val.title}></UneAction>
                    )
                })
            }
        </View>
    )
};

export default ListeActions