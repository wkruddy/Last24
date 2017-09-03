import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Colors, PrimaryTheme } from '../../common/enums';
import HeaderLinkBar from '../HeaderLinkBar/HeaderLinkBar';

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid ${Colors.DarkGrey};
    height: 90px;
    color: ${Colors.White};
    background-color: ${PrimaryTheme.Primary};
`;

const TitleBox = styled.div``;

const HeaderBox = styled.h1`
    text-align: left;
    flex-direction: row;
`;
const SubHeaderBox = styled.h4`
    text-align: left;
    flex-direction: row;
`;

const PageHeader: React.FunctionComponent<{ headerText: string; subheaderText: string }> = ({
    headerText,
    subheaderText,
}) => (
    <HeaderWrapper>
        <TitleBox>
            <HeaderBox>
                <FormattedMessage id={headerText} defaultMessage={headerText} />
            </HeaderBox>
            <SubHeaderBox>
                <FormattedMessage id={subheaderText} defaultMessage={subheaderText} />
            </SubHeaderBox>
        </TitleBox>
        <HeaderLinkBar />
    </HeaderWrapper>
);

PageHeader.defaultProps = {
    headerText: 'Last24',
    subheaderText: 'Standup Straight',
};
export default PageHeader;
