import React, { Component } from 'react';
import './AnalyticsView.scss';

class AnalyticsView extends Component<any, any> {
    constructor(props) {
        super(props);
    }

    public componentWillMount() {
        this.setState({
            headerText: 'Analytics',
            subheaderText: "Check yo' stats",
        });
    }

    public render() {
        return (
            <div className="analytics-container">
                <header className="header">
                    <h2 className="header-text">{this.state.headerText}</h2>
                    <h3 className="subheader-text">{this.state.subheaderText}</h3>
                </header>
            </div>
        );
    }
}

export default AnalyticsView;
