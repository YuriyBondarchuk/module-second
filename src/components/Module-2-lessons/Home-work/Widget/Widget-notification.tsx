import { Component } from "react";

interface WidgetNotificationProps {
    message: string;
}
 
interface WidgetNotificationState {}
 
class WidgetNotification extends Component<WidgetNotificationProps, WidgetNotificationState> {
    render() { 
        const {message}: WidgetNotificationProps = this.props;
        return ( <div className="card mb-3">{message}</div> );
    }
}
 
export default WidgetNotification;