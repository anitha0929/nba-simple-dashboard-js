import React, {Component} from 'react'
import {Accordion, Header} from 'semantic-ui-react'
import {fetchStatsByDivision} from '../../actionCreators'
import {connect} from 'react-redux'
import AccordionContent from '../accordionContent'

class NbaStats extends Component {
    state = {activeIndex: -1};
    setParentState = (newIndex) => this.setState({activeIndex: newIndex});

    //NOTE: Calling a child component approach is adopted here to demonstrate passing props and callback to child component
    render() {
        const {activeIndex} = this.state;
        return (
            <div>
                <Header as='h2' textAlign='center' block inverted color='blue'>
                    <Header.Content>View Team Stats by division</Header.Content>
                </Header>
                <Accordion fluid styled>
                    <AccordionContent
                        id={0}
                        division='Atlantic'
                        stats={this.props.Atlantic}
                        fetchDivision={this.props.fetchStatsByDivision}
                        activeIndex={activeIndex}
                        setParentState={this.setParentState}/>
                    <AccordionContent
                        id={1}
                        division='Central'
                        stats={this.props.Central}
                        fetchDivision={this.props.fetchStatsByDivision}
                        activeIndex={activeIndex}
                        setParentState={this.setParentState}/>
                    <AccordionContent
                        id={2}
                        division='Southeast'
                        stats={this.props.Southeast}
                        fetchDivision={this.props.fetchStatsByDivision}
                        activeIndex={activeIndex}
                        setParentState={this.setParentState}/>
                    <AccordionContent
                        id={3}
                        division='Northwest'
                        stats={this.props.Northwest}
                        fetchDivision={this.props.fetchStatsByDivision}
                        activeIndex={activeIndex}
                        setParentState={this.setParentState}/>
                    <AccordionContent
                        id={4}
                        division='Pacific'
                        stats={this.props.Pacific}
                        fetchDivision={this.props.fetchStatsByDivision}
                        activeIndex={activeIndex}
                        setParentState={this.setParentState}/>
                    <AccordionContent
                        id={5}
                        division='Southwest'
                        stats={this.props.Southwest}
                        fetchDivision={this.props.fetchStatsByDivision}
                        activeIndex={activeIndex}
                        setParentState={this.setParentState}/>
                </Accordion>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        Atlantic: state.api ? state.api.Atlantic : null,
        Central: state.api ? state.api.Central : null,
        Southeast: state.api ? state.api.Southeast : null,
        Northwest: state.api ? state.api.Northwest : null,
        Pacific: state.api ? state.api.Pacific : null,
        Southwest: state.api ? state.api.Southwest : null
    }
};

export default connect(
    mapStateToProps,
    {fetchStatsByDivision}
)(NbaStats);