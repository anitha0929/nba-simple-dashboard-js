import React, {Component} from 'react'
import {Table, Header, Icon, Dimmer, Loader} from 'semantic-ui-react'
import {fetchAssistLeaders} from '../../actionCreators'
import {connect} from 'react-redux'

class AssistLeaders extends Component {
    componentDidMount() {
        this.props.fetchAssistLeaders();
    }

    headerRow = ['PLAYER_NAME', 'FGM', 'TEAM_NAME', 'TEAM_CITY'];

    renderBodyRow = ({PLAYER_NAME, FGM, TEAM_NAME, TEAM_CITY}, i) => ({
        key: PLAYER_NAME + TEAM_NAME,
        cells: [
            PLAYER_NAME,
            FGM,
            TEAM_NAME,
            TEAM_CITY
        ],
    });

    render() {
        if (!this.props.leaders) {
            return (
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
        return (
            <div>
                <Header as='h2' textAlign='center' block inverted color='blue'>
                    <Header.Content>View Top 20 Assist Leaders over all divisions</Header.Content>
                </Header>
                <Header floated='left' as='h2' icon>
                    <Icon name='basketball ball'/>
                    Assist Leader
                    <Header.Subheader>{`${this.props.leader} is the Assist Leader over all divisions with ${this.props.pct} FGM`}</Header.Subheader>
                </Header>
                <div style={styles}>
                    <Table
                        striped
                        celled
                        headerRow={this.headerRow}
                        renderBodyRow={this.renderBodyRow}
                        tableData={this.props.leaders}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        leader: state.api ? state.api.assist_leader : null,
        pct: state.api ? state.api.assist_pct : null,
        leaders: state.api ? state.api.assist_leaders : null,
    }
};
export default connect(mapStateToProps, {fetchAssistLeaders})(AssistLeaders);

