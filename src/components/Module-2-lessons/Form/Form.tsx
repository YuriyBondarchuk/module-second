import { Component } from "react";
import Input from "../Input/Input";

const INITIAL_STATE = {
    login: "",
    email: "",
    agreed: false,
    age: "",
  };

class Form extends Component<any, any> {
    state = {...INITIAL_STATE};

    constructor(props: any) {
        super(props);

        this._handleFormSubmit = this._handleFormSubmit.bind(this);
    }

    private _handleFormSubmit = (e: any) => {
        e.preventDefault();

        const form = e.currentTarget;
        const elements = form.elements;

        const login = elements.login;
        const mail = elements.email;
        const checkbox = elements.checkbox;
        const age = elements.age;
        this.props.onSubmit({ login: login.value, mail: mail.value, checkbox: checkbox.checked, age: age.value });
      
        login.value = '';
        mail.value = '';
        checkbox.checked = true;
        age.value = ''

        console.log(checkbox);
    };

    checked = (e: any): any => {
        this.setState({
            agreed: e.target.checked
        })
        console.log(e.target.checked)
    }

    selected = (e: any): any => {
        this.setState({
            age: e.target.value
        })
        console.log(e.target.value)
    }

    render() {
        const {login, email, agreed, age} = this.state;

        return (
            <form
                onSubmit={(e) => this._handleFormSubmit(e)}
                className="container"
            >
                <div className="form-group">
                    {
                        <>
                            <label htmlFor={'login'}>login</label>
                            <Input
                                id={'login'}
                                type="text"
                                placeholder="login"
                                name="login"
                                defaultValue='Yurii'
                                onChange={(e: any) => console.log(e)}
                            />
                        </>
                    }
                </div>
                <div className="form-group">
                    {   
                        <>
                            <label htmlFor={'email'}>Email</label>
                            <Input
                                id={'email'}
                                type="email"
                                placeholder="email"
                                name="email"
                                onChange={(e: any) => console.log(e)}
                            />
                        </>
                    }
                </div>
                <div className="form-check">
                    <input className="form-check-input" onChange={(e) => this.checked(e)} type="checkbox" name="checkbox"  id="checkbox"/>
                    <label className="form-check-label" htmlFor="checkbox">checkbox</label>
                </div>
                <div>
                    <select onChange={(e) => this.selected(e)} 
                        className="form-select" 
                        name='age'
                        aria-label="Default select example">
                        <option selected>Select Age</option>
                        <option value="18">18</option>
                        <option value="25">25</option>
                        <option value="31">31</option>
                    </select>
                </div>
                <div className="form-group">
                    <button disabled={!agreed} type="submit" className="btn btn-success">
                        submit
                    </button>
                    <button type="reset" className="btn btn-error">
                        reset
                    </button>
                </div>
            </form>
        );
    }
}

export default Form;
