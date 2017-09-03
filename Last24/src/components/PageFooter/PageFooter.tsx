import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { PrimaryTheme } from '../../common/enums';

const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: row;
    height: 90px;
    background-color: ${PrimaryTheme.Primary};
    color: ${PrimaryTheme.Seconday};
`;

const Copyright = styled.div``;

const PageFooter: React.FunctionComponent = props => (
    <FooterWrapper>
        <Copyright>
            <FormattedMessage
                id="copyright"
                defaultMessage="Copyright Kyle Ruddy. Ettikit Designs, Inc. Parent Company of Revenant Labs. "
            />
        </Copyright>
    </FooterWrapper>
);

export default PageFooter;
