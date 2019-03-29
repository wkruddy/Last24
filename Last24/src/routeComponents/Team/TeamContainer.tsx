import React from 'react';

class TeamContainer extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    public componentWillMount() {
        this.setState({
            headerText: 'Team Settings',
            subheaderText: "Update yo' team options",
            // teamList: this.formatTeamItems( this.props.teamList )
        });
    }

    // formatTeamItems( teamList ) {
    //   return teamList.map( teammate => < div className = 'teammate' > {
    //       teammate
    //     } < /div>)
    //   }
    //

    public render() {
        return (
            <div className="team-container">
                <header className="header">
                    <h2 className="header-text"> {this.state.headerText} </h2>
                    <h3 className="subheader-text"> {this.state.subheaderText} </h3>
                </header>

                <div className="team" />
            </div>
        );
    }
}

export default TeamContainer;
