import React, {Component} from 'react'
import {Accordion, Icon, Table} from 'semantic-ui-react'

class AccordionContent extends Component {
    headerRow = ['TEAM_NAME', 'L', 'W', 'W_PCT', 'W_RANK', 'GP'];

    renderBodyRow = ({TEAM_NAME, L, W, W_PCT, W_RANK, GP}, i) => ({
        key: TEAM_NAME + i,
        cells: [
            TEAM_NAME,
            L,
            W,
            W_PCT,
            W_RANK,
            GP
        ],
    });

    styles = {
        margin: '20px',
        overflow: 'scroll',
    };

    isLoading = () => {
        if (this.props.stats)
            return this.renderTable(this.props.stats)
        else if(this.props.activeIndex === this.props.id)
            return <div>Loading...</div>;
    }

    renderTable(tableData) {
        return (
            <div style={this.styles}>
                <Table
                    striped
                    celled
                    headerRow={this.headerRow}
                    renderBodyRow={this.renderBodyRow}
                    tableData={tableData}/>
            </div>)
    }

    handleClick = (e, titleProps) => {
        //NOTE: This could be handled in a better way instead of accessing array element from children
        const currDivision = titleProps.children[1];
        const {index} = titleProps;
        const {activeIndex} = this.props;
        const newIndex = (activeIndex === index) ? -1 : index;
        this.props.setParentState(newIndex);
        this.props.fetchDivision(currDivision);
    }

    render() {
        return (
            <div>
                <Accordion.Title active={this.props.activeIndex === this.props.id} index={this.props.id} onClick={this.handleClick}>
                    <Icon name='dropdown'/>
                    {this.props.division}
                </Accordion.Title>
                <Accordion.Content active={this.props.activeIndex === this.props.id}>
                    {this.isLoading()}
                </Accordion.Content>
            </div>
        )
    }

}

export default AccordionContent;

