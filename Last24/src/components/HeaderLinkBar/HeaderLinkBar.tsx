import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RouteUrls } from '../../routeComponents/App/App.routes';

const HeaderLinks = styled.ul``;
const HeaderLink = styled.li``;
const StyledLink = styled(Link)``;

const HeaderLinkBar: React.FunctionComponent = props => (
    <HeaderLinks className="page-layout__state-links">
        <HeaderLink>
            <StyledLink to={RouteUrls.Today}>
                <FormattedMessage id="today" defaultMessage="Today" />
            </StyledLink>
        </HeaderLink>
        <HeaderLink>
            <StyledLink to={RouteUrls.Continuum}>
                <FormattedMessage id="continuum" defaultMessage="Continuum" />
            </StyledLink>
        </HeaderLink>
        <HeaderLink>
            <StyledLink to={RouteUrls.Analytics}>
                <FormattedMessage id="analytics" defaultMessage="Analytics" />
            </StyledLink>
        </HeaderLink>
        <HeaderLink>
            <StyledLink to={RouteUrls.Team}>
                <FormattedMessage id="team" defaultMessage="Team" />
            </StyledLink>
        </HeaderLink>
    </HeaderLinks>
);

export default HeaderLinkBar;
