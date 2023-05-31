import { Component } from "react";

class Input extends Component<any, any> {
    private _handleChanges = (e: any) => {
        this.setState({
            defaultValue: e.currentTarget.value
        })
        this.props.onChange({ value: e });
    };
    
    constructor(props: any) {
        super(props);

        this.state = {
            defaultValue: this.props.defaultValue
        }
    }

    render() {
        const {type, name, placeholder, id} = this.props;
        const {defaultValue} = this.state;

        return (
            <input
                id={id}
                className="form-control mb-3"
                type={type ? type : 'text'}
                name={name ? name : 'text'}
                value={defaultValue}
                placeholder={placeholder ? placeholder : 'placeholder'}
                onChange={(e) => this._handleChanges(e)}
            />
        );
    }
}

export default Input;
