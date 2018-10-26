import React from 'react'
import { View, StyleSheet } from 'react-native'
import OptionMenu from './OptionMenu'

/**
 * Composant Menu.
 */
const Menu = ({onAfficherToutes, onAfficherActives, onAfficherTerminees}) => (
    <View style={styles.menu}>
        <OptionMenu titre="Toutes" onClick={onAfficherToutes}/>
        <OptionMenu titre="Actives" onClick={onAfficherActives}/>
        <OptionMenu titre="Terminées" onClick={onAfficherTerminees}/>
    </View>
)

const styles = StyleSheet.create({
    menu: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd'
    }
})
export default Menu