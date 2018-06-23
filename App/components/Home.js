import React, {Component} from 'react'
import { StyleSheet, View, Text, Button, ART } from 'react-native';
const {
    Surface,
    Group,
    Shape,
  } = ART
  import { connect } from 'react-redux';

  class Home extends Component {
      render() {
        const {user, navigate} = this.props
          return (
              <View >
                <Surface width={200} height={200}>
                <Group>
                <Shape
                    d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
                    stroke="#000"
                    strokeWidth={1}
                />
                </Group>
                </Surface>
                   <Button onPress={() => navigate('Webcam')} title="To Camera" />
              </View>
          )
      }
  }

const mapStateToProps = state => ({
    user: state.User
})

export default connect(mapStateToProps, null)(Home)
