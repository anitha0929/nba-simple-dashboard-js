import React, {Component} from 'react'
import {Table, Header, Icon, Dimmer, Loader } from 'semantic-ui-react'
import {fetchLeaders} from '../../actionCreators'
import {connect} from 'react-redux'

class Leaders extends Component
{
    componentDidMount()
    {
        this.props.fetchLeaders();
    }

     headerRow = ['PLAYER', 'TEAM', 'PTS'];

     renderBodyRow = ({ PLAYER, TEAM, PTS }, i) => ({
    key: PLAYER + TEAM,
    cells: [
        PLAYER,
        TEAM,
        PTS,
    ],
});
    render(){
        if(!this.props.leaders)
        {
            return(
                <div>
                    <Dimmer active>
                        <Loader>Loading</Loader>
                    </Dimmer>
                </div>
            )
        }
        let styles = {
            margin: '20px',
            width: '1000px',
            height: '700px',
            overflow: 'scroll',
        };
        return(
            <div>
                <Header as='h2' textAlign='center' block inverted color='blue'>
                    <Header.Content>View Top 20 Leading point scorers over all divisions</Header.Content>
                </Header>
                <Header floated = 'left' as='h2' icon>
                    <Icon name='basketball ball' />
                    Leading point scorer
                    <Header.Subheader>{`${this.props.leader} is the leading point scorer over all divisions with ${this.props.pct} points`}</Header.Subheader>
                </Header>
            <div style={styles}>
            <Table
                striped
                celled
                headerRow={this.headerRow}
                renderBodyRow={this.renderBodyRow}
                tableData={this.props.leaders} />
            </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        leader: state.api? state.api.leader:null,
        pct: state.api?state.api.pct:null,
        leaders: state.api?state.api.leaders:null
    }
};
export default connect(mapStateToProps,{fetchLeaders})(Leaders);

