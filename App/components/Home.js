import React, {Component} from 'react'
import { StyleSheet, View, Text, Button, ART, ScrollView } from 'react-native';
const {
    Surface,
    Group,
    Shape,
  } = ART
const ARTText = ART.Text
import { connect } from 'react-redux';
import Pie, {userPurchases} from '../D3/Doughnut'
import RNSCHistogram, {userPurchasesYear} from '../D3/RNSCHistogram'
import Histogram from '../D3/Histogram'
import styles from '../../public'

const Home = props => {
    const chartWidth = 250
    const chartHeight = 250
    const {user, navigate} = props
        return (
            <ScrollView >
                <Button onPress={() => navigate('Webcam')} title="To Camera" />
                <Surface width={chartWidth} height={chartHeight}>
                    <Pie userPurchases={userPurchases} chartX={chartWidth / 2} chartY={chartHeight / 2} />
                    <ARTText
                        font="bold 15px Arial"
                        fill="#000"
                        x={chartWidth / 2 - 40} //Find some way to center
                        y={chartHeight / 2 - 10}>
                        Chart Label
                    </ARTText>
                </Surface>
                <RNSCHistogram userPurchases={userPurchasesYear} width={chartWidth} height={chartHeight} />
                <Histogram />
            </ScrollView>
        )
}

const mapStateToProps = state => ({
    user: state.User
})

export default connect(null, null)(Home)
