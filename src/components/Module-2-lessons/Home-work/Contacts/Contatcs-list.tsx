import { Component } from "react";
import { ContactsFormValues } from "./Contacts.interfaces";

interface ContatcsListProps {
    list: ContactsFormValues[],
    emitRemoveUser: (user: ContactsFormValues) => void;
}
 
interface ContatcsListState {}
 
class ContatcsList extends Component<ContatcsListProps, ContatcsListState> {

    render() { 
        const { list }: ContatcsListProps = this.props;

        return ( <div className="card mt-3 p-3">
            <h3 className="mb-3">Contacts</h3>

            {
                list.length > 0 ?
                <ul className="list-group p-3">
                    {
                        list.map((user: ContactsFormValues, index: number) => (
                            <li key={index} className="list-group-item d-flex justify-content-between">
                                <div className="d-flex">
                                    <div className="me-5">{index + 1}</div>
                                    <div className="d-flex me-3 align-items-center"> 
                                        <h5>Name: </h5>
                                        {user.userName}
                                    </div>
                                    <div className="d-flex me-3 align-items-center"> 
                                        <h5>Phone Number: </h5>
                                        {user.userNumber}
                                    </div>
                                    <div className="d-flex me-3 align-items-center"> 
                                        <h5>Email: </h5>
                                        {user.userEmail}
                                    </div>
                                </div>
                                <button onClick={() => this.props.emitRemoveUser(user)} className="btn btn-warning" type="button">Remove user</button>
                            </li>
                        ))
                    }
                </ul> :
                <div className="m-3">The user list will be here</div>
                
            }
        </div> );
    }
}
 
export default ContatcsList;