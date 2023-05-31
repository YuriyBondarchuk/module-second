import { Component } from 'react';
import './Events.scss';

class Events extends Component {
    static defaultProps = {
        step: 0,
        userName: 'User name defult',
        initialValue: 0,
    }

    state = { value: 0};

    setOne = () => this.setState({value: 1});
    clearState = () => this.setState({value: 0});

    render() {
        const { step, userName, initialValue }:any = this.props;
  
        return (
            <div>
                {this.state.value}
                <button onClick={() => this.setOne()}>One</button>
                <button onClick={() => this.clearState()}>Clear</button>
            </div>
        )
    }
}

export default Events;