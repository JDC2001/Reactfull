import React from 'react';

export default class TransactionRecordItem extends React.Component {

    constructor(props){
        super(props);
        this.itemData = props.itemData;
    }

    render() {

        return <div className="grid-item box-sizing">
            <div className="top">
                <div className="nameAndTime">
                    <div>{this.itemData.productName}</div>
                    <div className="gray">{this.itemData.orderTime}</div>
                </div>
                <div className="payState">
                    <button className="button-state button-type-{backgroundColor}">{this.itemData.statusName}</button>
                </div>
            </div>
            <div className="center box-sizing">
                <ul className="clearfix">
                    <li className="f18">{this.itemData.orderAmt}</li>
                    <li className="f18">{this.itemData.principalinterest}</li>
                    <li className="f18 w-small">{this.itemData.interest}</li>
                    <li className="gray">购买金额（元）</li>
                    <li className="gray">应收本息（元）</li>
                    <li className="gray w-small">应收利息（元）</li>
                </ul>
            </div>
            <div className="bottom">
                <ul className="clearfix">
                    <li className="borderBottomD7D7D7 box-sizing plhalf">
                        <span>起息日期：</span>
                        <span>{this.itemData.interestStartDate}</span>
                    </li>
                    <li className="borderBottomD7D7D7 box-sizing t-right prhalf">
                        <span>到期日期：</span>
                        <span>{this.itemData.interestEndDate}</span>
                    </li>
                    <li className='borderBottomD7D7D7'>
                        <button className='button-border-red'>继续付款</button>
                    </li>
                </ul>
            </div>
        </div>
    }

}

TransactionRecordItem.propTypes = {
    itemData: React.PropTypes.object.isRequired
};