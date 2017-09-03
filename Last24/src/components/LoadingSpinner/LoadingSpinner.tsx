import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import styled from 'styled-components';

const LoadingSpinnerWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;

    > div {
        top: 20%;
        position: relative;
    }
    svg {
        color: ${({ color }) => color};
    }
`;

const LoadingSpinner = ({
    className,
    thickness,
    size,
    color,
}: {
    className?: string;
    thickness?: number;
    size?: number;
    color?: string;
}) => {
    return (
        <LoadingSpinnerWrapper className={className} color={color}>
            <CircularProgress thickness={thickness} size={size} />
        </LoadingSpinnerWrapper>
    );
};

LoadingSpinner.defaultProps = {
    className: '',
    thickness: 4,
    size: 60,
    color: '',
};

export default LoadingSpinner;
