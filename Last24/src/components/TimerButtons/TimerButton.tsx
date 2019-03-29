import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { PrimaryTheme } from '../../common/enums';

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5px 0;
`;

const ActionButton = styled.button`
    border-radius: 15px;
    padding: 5px 10px;
    border: 0;
    outline: 0;
    background-color: ${PrimaryTheme.PrimaryButton}
    color: ${PrimaryTheme.PrimaryButtonText};
    cursor: pointer;

    &:hover {
        background-color: ${PrimaryTheme.PrimaryButtonHover}
        color: $grey;
    }

    &:active {
        background-color: ${PrimaryTheme.PrimaryButtonActive}
    }
`;

const TimeReadout = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 250px;
    margin: 10px;
`;

interface ITimerButtonProps {
    type: string;
    className?: string;
    buttonText: string;
    timeDisplay: string;
    handleTimerClick: (e, type: any) => void;
}

const TimerButton: React.FunctionComponent<ITimerButtonProps> = ({
    type,
    timeDisplay,
    buttonText,
    handleTimerClick,
    className,
}) => {
    const onClickHandler = e => handleTimerClick(e, type);
    return (
        <ButtonGroup>
            <ActionButton className={className} onClick={onClickHandler}>
                <FormattedMessage id={className} defaultMessage={buttonText} />
            </ActionButton>
            <TimeReadout>{timeDisplay}</TimeReadout>
        </ButtonGroup>
    );
};

export default TimerButton;
