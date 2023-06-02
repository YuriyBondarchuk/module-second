import { Component } from "react";

interface ContactNotificationProps {
    message: string;
}
 
interface ContactNotificationState {
    
}
 
class ContactNotification extends Component<ContactNotificationProps, ContactNotificationState> {
    render() { 
        const { message } = this.props;

        return ( <div style={{backgroundColor: '#dc3545', color: 'white'}} className="card mb-3 p-3">{message}</div> );
    }
}
 
export default ContactNotification;