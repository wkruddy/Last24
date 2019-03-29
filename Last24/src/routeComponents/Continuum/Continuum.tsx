// import { default as moment } from 'moment-timezone'
import React from 'react';
import { FormattedDate } from 'react-intl';
import styled from 'styled-components';
import { Colors, PrimaryTheme } from '../../common/enums';
import { ContinuumStringMap } from './Continuum.constants';
import { IContinuumProps } from './Continuum.interfaces';
import ContinuumContent from './ContinuumContent';

const ContinuumList = styled.ul`
    overflow-y: auto;
    list-style-type: none;
    margin: 10px;
`;

const ContinuumItem = styled.li`
    margin: 10px 0;
    border-top: 1px solid ${Colors.DarkGrey};
`;

const ContinuumBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const DateContainer = styled.div`
    border-bottom: 1px solid ${Colors.DarkGrey};
`;

const ContunuumWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1.5;
    max-height: calc(100% - 180px);
`;

const Header = styled.header`
    display: flex;
    flex-direction: column;

    h2,
    h3 {
        color: ${PrimaryTheme.PrimaryText};
        text-align: left;
        width: 50%;
    }
`;

const Continuum: React.FunctionComponent<IContinuumProps> = ({ continuumData, headerText, subheaderText }) => {
    return (
        <ContunuumWrapper>
            <Header>
                {headerText && <h2>{headerText}</h2>}
                {subheaderText && <h4>{subheaderText}</h4>}
            </Header>
            <ContinuumBox>
                <ContinuumList>
                    {continuumData.length > 0 &&
                        continuumData.map(({ date, history }) => {
                            const {
                                todayList,
                                currentList,
                                lateList,
                                timeOffList,
                                todaysTasks,
                                endTime,
                                startTime,
                            } = history;

                            const EndRenderProps = () => <div>{endTime}</div>;
                            const StartRenderProps = () => <div>{startTime}</div>;
                            return (
                                <ContinuumItem key={date}>
                                    <DateContainer>
                                        <FormattedDate value={date} />
                                    </DateContainer>
                                    <ContinuumBox>
                                        <ContinuumContent
                                            title={ContinuumStringMap.MembersWhoShowedUp}
                                            titleId={`${date}-showed-up`}
                                            teammateList={todayList || currentList}
                                        />
                                        <ContinuumContent
                                            title={ContinuumStringMap.MembersWhoWereLate}
                                            titleId={`${date}-late`}
                                            teammateList={lateList}
                                        />
                                        <ContinuumContent
                                            title={ContinuumStringMap.MembersWhoWereOnPTO}
                                            titleId={`${date}-pto`}
                                            teammateList={timeOffList}
                                        />
                                        <ContinuumContent
                                            title={ContinuumStringMap.WhatchaDid}
                                            titleId={`${date}-your-tasks`}
                                            taskList={todaysTasks}
                                        />
                                        <ContinuumContent
                                            title={ContinuumStringMap.WhenStandupEnded}
                                            titleId={`${date}-ended`}
                                            children={EndRenderProps}
                                        />
                                        <ContinuumContent
                                            title={ContinuumStringMap.WhenStandupStarted}
                                            titleId={`${date}-started`}
                                            children={StartRenderProps}
                                        />
                                    </ContinuumBox>
                                </ContinuumItem>
                            );
                        })}
                </ContinuumList>
            </ContinuumBox>
        </ContunuumWrapper>
    );
};

Continuum.defaultProps = {
    continuumData: [],
};

export default Continuum;
