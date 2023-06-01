import { Component } from "react";
import WidgetButtons from "./Widget-buttons";
import WidgetStatistic from "./Widget-statictics";
import { WidgetButtonsInterface } from "./Widget.interface";
import WidgetReset from "./Widget-reset";
import { ButtonsTypeEnum } from "./Widget.enum";

const initState: WidgetButtonsInterface = {
    goodCounter: 0,
    neutralCounter: 0,
    badCounter: 0
}

interface WidgetProps {
    title: string;
}
 
interface WidgetState extends WidgetButtonsInterface{}
 
class Widget extends Component<WidgetProps, WidgetState> {
    state: WidgetState = { ...initState };

    private _handleButtons = (buttonType: ButtonsTypeEnum): void => {
        const {goodCounter, neutralCounter, badCounter} = this.state;

        switch(buttonType) {
            case ButtonsTypeEnum.goodButton:
                this.setState({
                    goodCounter: goodCounter + 1
                })
                break;
            case ButtonsTypeEnum.neutralButton:
                this.setState({
                    neutralCounter: neutralCounter + 1
                })
                break;
            case ButtonsTypeEnum.badButton:
                this.setState({
                    badCounter: badCounter + 1
                })
                break;
        }
    }

    private _handleReset = (): void => {
        this.setState({...initState});
    }

    render() { 
        const {title} = this.props;

        return (
            <div className="widget card mt-3">
                <div className="card-body">
                    <h2 className="mb-3">{title}</h2>
                    <WidgetButtons emitClick={this._handleButtons}/>
                    <WidgetStatistic buttons={this.state}/>
                    <WidgetReset emitReset={this._handleReset} />
                </div>
            </div>
        );
    }
}
 
export default Widget;