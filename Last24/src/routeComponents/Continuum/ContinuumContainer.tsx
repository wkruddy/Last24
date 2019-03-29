// import { default as moment } from 'moment-timezone'
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ContinuumService from '../../services/ContinuumService/ContinuumService';
import { fetchContinuum } from './actions/Continuum.actions';
import Continuum from './Continuum';
import { ContinuumStringMap } from './Continuum.constants';
import { IContinuumContainerProps, IContinuumContainerState } from './Continuum.interfaces';

class ContinuumContainer extends React.Component<IContinuumContainerProps, IContinuumContainerState> {
    public service: ContinuumService;

    public state = {
        headerText: ContinuumStringMap.Continuum,
        subheaderText: ContinuumStringMap.SubheaderText,
    };

    constructor(props) {
        super(props);
        this.service = new ContinuumService({});
    }

    public componentDidMount() {
        this.props.fetchContinuum({}, this.service);
    }

    public render() {
        const { headerText, subheaderText } = this.state;
        const { continuumData } = this.props;
        return <Continuum continuumData={continuumData} headerText={headerText} subheaderText={subheaderText} />;
    }
}

const mapStateToProps = ({ continuum: { continuumData } }) => ({
    continuumData,
});

const mapDispatchToProps = dispatch => ({
    fetchContinuum: bindActionCreators(fetchContinuum, dispatch),
});

export default connect<{}, {}, any>(
    mapStateToProps,
    mapDispatchToProps
)(ContinuumContainer);
