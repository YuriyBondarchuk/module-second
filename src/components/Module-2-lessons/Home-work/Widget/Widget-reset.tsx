import { Component } from "react";

interface WidgetResetProps {
    emitReset: () => void;
}
 
interface WidgetResetState {
    
}
 
class WidgetReset extends Component<WidgetResetProps, WidgetResetState> {
    render() { 
        return ( <button onClick={() => this.props.emitReset()} type="button" className="btn btn-dark">Reset all</button> );
    }
}
 
export default WidgetReset;