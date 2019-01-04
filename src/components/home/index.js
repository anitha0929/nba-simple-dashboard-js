import React, {Component} from 'react'
import {Header, Image} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import myImage from './images/nbaTeam.png';

class Home extends Component {
    render() {
        return (

            <div>
                <Header as='h2' textAlign='center' block inverted color='blue'>
                    <Header.Content>Presenting A Simple NBA Dashboard</Header.Content>
                    <Header.Subheader>{'for the current season'}</Header.Subheader>
                </Header>
                <Image size='big' src={myImage} centered/>
            </div>
        )
    }
}

export default Home;