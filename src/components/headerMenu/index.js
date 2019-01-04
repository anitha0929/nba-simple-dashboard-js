import React, {Component} from 'react'
import {Dropdown, Menu} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {Link} from 'react-router-dom'

export default class HeaderMenu extends Component {
    state = {}

    handleItemClick = (e, {name}) => {
        this.setState({activeItem: name});
    }

    handleDropdownItemClick = (e, {name}) => {
        this.setState({activeItem: name});
    }

    render() {
        const {activeItem} = this.state

        return (
            <Menu>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    content='Home'
                    onClick={this.handleItemClick}
                    as={Link}
                    to='/'
                />
                <Dropdown
                    item text='View Dashboard'
                    name='viewDashboard'
                    onClick={this.handleItemClick}>
                    <Dropdown.Menu>
                        <Link to="/nba-stats">
                            <Dropdown.Item
                                name='nbaStats'
                                onClick={this.handleDropdownItemClick}
                            >
                                Team Standings By Division
                            </Dropdown.Item>
                        </Link>
                        <Link to="/leaders">
                            <Dropdown.Item
                                name='leaders'
                                onClick={this.handleDropdownItemClick}
                            >
                                Leading Point Scorer over all division
                            </Dropdown.Item>
                        </Link>
                        <Link to="/assist-leaders">
                            <Dropdown.Item
                                name='assistLeaders'
                                onClick={this.handleDropdownItemClick}
                            >
                                Assist Leaders over all division
                            </Dropdown.Item>
                        </Link>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>
        )
    }
}