import React from 'react'
import {StyleSheet, View, ScrollView} from 'react-native'
import Entete from './src/Entete'
import Saisie from './src/Saisie'
import BoutonCreer from './src/BoutonCreer'
import ListeActions from './src/action/ListeActions'
import Menu from './src/menu/Menu'

/**
 * Composant d'entrée de l'application.
 */
export default class App extends React.Component {

    // état global de l'application
    // il y aura probalement d'autres informations à stocker
    state = {
        texteSaisie: '',
        actions: []
    }

    /**
     * Méthode invoquée lorsque que la saisie change.
     *
     * @param nouvelleSaisie la valeur saisie
     */
    quandLaSaisieChange(nouvelleSaisie) {
        console.log('la saisie à changée', nouvelleSaisie)
        this.setState({texteSaisie : nouvelleSaisie});
    }

    /**
     * Méthode invoquée lors du clic sur le bouton `Valider`.
     */
    validerNouvelleAction(texteSaisie) {
        console.log('Vous avez cliqué sur Valider !')
        this.setState((prevState) => ({
            actions: [...prevState.actions,
                {
                    title: this.state.texteSaisie,
                    done: false
                }
            ],
            texteSaisie: ''
        }))
    }

    /**
     * Changer l'état d'une action
     * @param index index de l'action en question
     */
    terminerAction(index) {
        console.log("Terminer action");
        const act = {
            title: this.state.actions[index].title,
            done: !this.state.actions[index].done
        }

        this.setState(prevState => ({
            actions: prevState.actions
                .map((action, i) => (i === index) ? act : action)
        }))
    }

    /**
     * Supprimer une action
     * @param index index de l'action en question
     */
    supprimerAction(index) {
        this.setState(prevState => ({
            actions: prevState.actions.filter((action, i) => (i !== index))
        }))
    }

    render() {
        const {texteSaisie, actions} = this.state

        return (
            <View style={styles.conteneur}>
                <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
                    <Entete/>
                    <Saisie texteSaisie={texteSaisie} evtTexteModifie={(titre) => this.quandLaSaisieChange(titre)}/>
                    <ListeActions liste={actions}
                                  onTerminer={(index) => this.terminerAction(index)}
                                  onSupprimer={(index) => this.supprimerAction(index)}/>
                    <BoutonCreer onValider={() => this.validerNouvelleAction(texteSaisie)}/>
                </ScrollView>
                <Menu/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conteneur: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
        paddingTop: 60,
    },
})