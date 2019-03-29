import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const TeamCheckboxWrapper = styled.div``;
const Heading = styled.div``;
const TeamCheckboxInput = styled.input``;

interface ITeamCheckboxProps {
    headerText: string;
    className?: string;
    isDisabled: boolean;
    onCheckChange: (toggleOn: boolean) => void;
}

const TeamCheckbox: React.FunctionComponent<ITeamCheckboxProps> = ({
    headerText,
    className,
    onCheckChange,
    isDisabled,
}) => {
    const handleChange = ({ currentTarget }) => {
        const toggleOn = currentTarget.checked;
        onCheckChange(toggleOn);
    };
    return (
        <TeamCheckboxWrapper className={className} key={headerText}>
            <Heading>
                <FormattedMessage id={headerText} defaultMessage={headerText} />
            </Heading>
            <TeamCheckboxInput type="checkbox" onChange={handleChange} disabled={isDisabled} />
        </TeamCheckboxWrapper>
    );
};

export default TeamCheckbox;
