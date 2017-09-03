import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const ListBox = styled.div``;

const OrderedList = styled.ol`
    display: flex;
    flex-direction: column;
`;
const TeamListItem = styled.li``;
const Title = styled.div``;
const Name = styled.div``;

interface IOrderedListProps {
    title: string;
    list: any;
    classType: string;
}
const OrderedTeamList: React.FunctionComponent<IOrderedListProps> = ({ title, list, classType }) => {
    const titleString = `${title}:`;
    return (
        <ListBox>
            <Title>
                <FormattedMessage id={titleString} defaultMessage={titleString} />
            </Title>
            <OrderedList>
                {list &&
                    list.map((name, index) => (
                        <TeamListItem key={`${classType}-${index}`}>
                            <Name>
                                <FormattedMessage id={name} defaultMessage={name} />
                            </Name>
                        </TeamListItem>
                    ))}
            </OrderedList>
        </ListBox>
    );
};

export default OrderedTeamList;
