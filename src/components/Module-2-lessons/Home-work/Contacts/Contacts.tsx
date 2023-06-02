import { Component } from "react";
import ContactsForm from "./Contacts-form";
import ContatcsList from "./Contatcs-list";
import { ContactsFormValues } from "./Contacts.interfaces";
import ContatcsFilter from "./Contats-filter";
import ContactNotification from "./Contact-notification";

interface ContatcsProps {}
 
interface ContatcsState {
    list: ContactsFormValues[], 
    filtered: ContactsFormValues[],
    searchValue: string;
    userIsExist: boolean;
}
 
class Contatcs extends Component<ContatcsProps, ContatcsState> {
    state: ContatcsState = { 
        list: [], 
        filtered: [], 
        searchValue: '',
        userIsExist: false
    };

    private _addUserToList = (user: ContactsFormValues): void => {
        const { list } = this.state;
        const finalArr = [...list, ...[user]];

        const findUser: ContactsFormValues | undefined = list.find(
            (userFromList: ContactsFormValues) => userFromList.userName === user.userName);
        
        if (!findUser) {
            this.setState({ list: finalArr, userIsExist: false });
        } else {
            this.setState({userIsExist: true });
        }
    }

    private _removeUserFromList = (user: ContactsFormValues): void => {
        const { list } = this.state;
        const finalArr = list.filter((userFromList: ContactsFormValues) => userFromList.userName !== user.userName);

        this.setState({ list: finalArr });
    }

    private _filterUserList = (value: string): void => {
        const { list }: ContatcsState = this.state;

        const filteredArr = list.filter(
            (userFromList: ContactsFormValues) =>
            userFromList.userName.toLowerCase().includes(value)
        );

        this.setState({
            searchValue: value,
            filtered: filteredArr
        });
    }

    render() { 
        const { list, filtered, searchValue, userIsExist }: ContatcsState = this.state
        return (
            <div className="card p-3 mt-3">
                <h2 className="mb-3">PhoneBook</h2>
                <ContactsForm emitFormSubmit={(form) => this._addUserToList(form.values)}/>
                {
                    userIsExist && <ContactNotification message="User is exist, try to enter anouther name" />
                }
                <ContatcsFilter emitSearchUser={this._filterUserList}/>
                <ContatcsList list={searchValue ? filtered : list} emitRemoveUser={this._removeUserFromList}/>
            </div>
        );
    }
}
 
export default Contatcs;