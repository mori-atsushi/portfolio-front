import * as React from 'react';
import styledComponents from 'styled-components';

import profileJpg from '../../../statics/images/profile.jpg';

export default () => (
  <Container>
    <Title>Profile</Title>
    <Content>
      <Name>
        森 篤史
        <EnglishName>Mori Atsushi</EnglishName>
      </Name>
      <Introduction>
        はじめまして。<br/>
        筑波大学の学生で、写真が好きなエンジニアです。
      </Introduction>
      <Career>
        <Date>1996</Date><Event>山口県生まれ</Event>
        <Date>2012</Date><Event>明石高専 電気情報工学科 入学</Event>
        <Date>2015</Date><Event>知的情報環境研究室（新井イスマイル）</Event>
        <Date>2017</Date><Event>筑波大学 情報学群 情報メディア創成学類 編入学<br/>デジタルネイチャー研究室（落合陽一）</Event>
        <Date>2019</Date><Event>株式会社サイバーエージェント エンジニア（予定）</Event>
      </Career>
    </Content>
    <Image />
  </Container>
);

const Container = styledComponents.div`
  display: flex;
  margin: 3rem 2rem;
  justify-content: center;
`;

const Title = styledComponents.h2`
  font-size: 2rem;
  font-weight: 600;
  width: 10rem;
`;

const Content = styledComponents.div`
  margin-right: 1rem;
`;

const Name = styledComponents.div`
  font-size: 2rem;
  font-weight: 600;
`;

const EnglishName = styledComponents.span`
  font-size: 1.3rem;
  margin-left: 0.5rem;
`;

const Introduction = styledComponents.p`
  line-height: 1.5rem;
  margin: 2rem 0;
`;

const Career = styledComponents.dl`
  clear: left;
  line-height: 1.5rem;
`;

const Date = styledComponents.dt`
  float: left;
`;

const Event = styledComponents.dd`
  margin-left: 3rem;
`;

const Image = styledComponents.div`
  background-image: url(${profileJpg});
  background-size: cover;
  background-position: center;
  width: 18rem;
  border-radius: 1rem;
`;
