import { Component } from "react";
import { WidgetButtonsInterface } from "./Widget.interface";
import WidgetNotification from "./Widget-notification";

interface WidgetStatisticProps {
    buttons: WidgetButtonsInterface
}
 
interface WidgetStatisticState {
    buttons: WidgetButtonsInterface
}
 
class WidgetStatistic extends Component<WidgetStatisticProps, WidgetStatisticState> {
    state: WidgetStatisticState = { buttons: { ...this.props.buttons } };
    
    private _countTotalFeedback = (): number => {
        const { buttons } = this.props;

        return Object.values(buttons).reduce((prev, curr) => {
            return prev + curr
        })
    }

    private _hasFeedback = (): boolean => {
        const { buttons } = this.props;
        const allFeedback = Object.values(buttons).reduce((prev, curr) => {
            return prev + curr
        });

        return !!allFeedback
    }

    private _countPositiveFeedbackPercentage = (): string => {
        const { buttons } = this.props;

        const allFeedback = Object.values(buttons).reduce((prev, curr) => {
            return prev + curr
        });

        const calkValue: number =  Math.round(((100 * buttons.goodCounter) / allFeedback));

        return calkValue ? calkValue + ' %' : '0 %';
    }

    render() { 
        const { buttons } = this.props;

        return ( 
            <div className="widget-statistic">
                <h3>Statistic</h3>
                {
                    this._hasFeedback() ?
                    <div className="card mb-3">
                        <ul className="list-group list-group-flush">    
                            <li className="list-group-item">Good : {buttons.goodCounter} </li>
                            <li className="list-group-item">Neutral : {buttons.neutralCounter}</li>
                            <li className="list-group-item">Bad : {buttons.badCounter}</li>
                            <li className="list-group-item">Total : {this._countTotalFeedback()}</li>
                            <li className="list-group-item">Positive Feedback : {this._countPositiveFeedbackPercentage()}</li>
                        </ul>
                    </div> :
                    <WidgetNotification message={'There is no feedback'}/>
                }
                
            </div> 
        );
    }
}
 
export default WidgetStatistic;