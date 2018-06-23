import React, {Component} from 'react'
import { StyleSheet, View, Text, Button, ART } from 'react-native';
const {
    Surface,
    Group,
    Shape,
  } = ART
import { connect } from 'react-redux';
import Pie from '../D3/doughnut'

const Home = props => {
    const {user, navigate} = props
        return (
            <View >
                <Surface width={250} height={250}>
                    <Pie />
                </Surface>
                <Button onPress={() => navigate('Webcam')} title="To Camera" />
            </View>
        )
}

const mapStateToProps = state => ({
    user: state.User
})

export default connect(null, null)(Home)
