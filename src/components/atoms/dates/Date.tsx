import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  date: Date
}

export default (props: IProps) => {
  const { date } = props;
  const formatted = `${ date.getFullYear() }.${ date.getMonth() + 1 }.${ date.getDate() }`;

  return (
    <Time>{ formatted }</Time>
  )
};

const Time = styled.time``;
