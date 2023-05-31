import { Component } from "react";

class Counter extends Component<any, any> {
    static defaultProps = {
        startConterValue: 0,
        title: "",
        showTitle: false,
    };

    constructor(props: any) {
        super(props);

        const { startConterValue, title, showTitle }: any = this.props;

        this.state = {
            count: this.props.startConterValue,
        };

        this.setState({
            count: props.startConterValue
        })

        this._increment = this._increment.bind(this);
        this._decrement = this._decrement.bind(this);
    }

    private _increment = () => {
        console.log("increment");
        const { count }: any = this.state;

        this.setState({
            count: count + 1,
        });
    };

    private _decrement = () => {
        console.log("decrement");
        const { count }: any = this.state;

        this.setState({
            count: count - 1,
        });
    };

    render() {
        const { count }: any = this.state;
        const { startConterValue, title, showTitle }: any = this.props;

        return (
            <div>
                {
                    showTitle && <h2>{title}</h2>
                }
                <div>{"Result : " + this.state.count}</div>
                <div>
                    <button onClick={() => this._increment()}>
                        Counter + 1
                    </button>
                    <button onClick={() => this._decrement()}>
                        Counter - 1
                    </button>
                </div>
            </div>
        );
    }
}

export default Counter;
