import { Component } from "react";
import { WidgetButtonsInterface } from "./Widget.interface";
import { ButtonsTypeEnum } from "./Widget.enum";

const initState: WidgetButtonsInterface = {
    goodCounter: 0,
    neutralCounter: 0,
    badCounter: 0
}

interface WidgetButtonsProps {
    emitClick: (buttonType: ButtonsTypeEnum) => void;
}
 
interface WidgetButtonsState extends WidgetButtonsInterface {}
 
class WidgetButtons extends Component<WidgetButtonsProps, WidgetButtonsState> {
    state: WidgetButtonsInterface = { ...initState }

    private _BUTTON_TYPE = ButtonsTypeEnum;

    private _handleClick = (type: ButtonsTypeEnum): void => {    
        this.props.emitClick(type);
    }

    render() { 
        return ( 
            <div className="widget-buttons mb-3">
                <button onClick={() => this._handleClick(this._BUTTON_TYPE.goodButton)} type="button" className="btn btn-success me-3" data-type='goodCounter'>Good</button>
                <button onClick={() => this._handleClick(this._BUTTON_TYPE.neutralButton)} type="button" className="btn btn-info me-3" data-type='neutralCounter'>Neutral</button>
                <button onClick={() => this._handleClick(this._BUTTON_TYPE.badButton)} type="button" className="btn btn-danger" data-type='badCounter'>Bad</button>
            </div>
         );
    }
}
 
export default WidgetButtons;