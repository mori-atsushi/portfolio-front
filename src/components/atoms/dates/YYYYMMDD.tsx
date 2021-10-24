import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  date: string
}

const YYYYMMDD: React.FC<IProps> = ({
  date
}) => {
  const instance = new Date(date)
  const formatted = `${ instance.getFullYear() }.${ instance.getMonth() + 1 }.${ instance.getDate() }`;

  return (
    <Time>{ formatted }</Time>
  )
};

export default YYYYMMDD;

const Time = styled.time``;
