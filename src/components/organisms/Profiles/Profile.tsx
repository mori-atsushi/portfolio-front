import * as React from 'react';
import styledComponents from 'styled-components';

import ExternalLink from 'src/components/atoms/links/ExternalLink';
import profileJpg from '../../../statics/images/profile.jpg';
import SnsList from '../../molecules/sns/SnsList';

export default () => (
  <Wrapper>
    <Container>
      <Row>
        <Title>Profile</Title>
        <Content>
          <Name>
            森 篤史
            <EnglishName>Mori Atsushi</EnglishName>
          </Name>
          <Introduction>
            はじめまして。<br/>
            写真が好きなエンジニアです。<br/>
            android / ios / web等、フロントエンドを中心に開発しています。
          </Introduction>
          <Career>
            <Date>1996</Date>
            <Event>
              山口県生まれ
            </Event>

            <Date>2012</Date>
            <Event>
              明石高専 電気情報工学科 入学
            </Event>

            <Date>2015</Date>
            <Event>
              知的情報環境（新井イスマイル）研究室
            </Event>

            <Date>2017</Date>
            <Event>
              筑波大学 情報学群 情報メディア創成学類 編入学<br/>
              <ExternalLink href="https://digitalnature.slis.tsukuba.ac.jp/">デジタルネイチャー（落合陽一）研究室</ExternalLink>
            </Event>

            <Date>2019</Date>
            <Event>
              <ExternalLink href="https://www.cyberagent.co.jp/">株式会社サイバーエージェント</ExternalLink><br/>
            	<ExternalLink href="https://cyber-z.co.jp/">株式会社 CyberZ</ExternalLink> エンジニア<br/>
              2019年度 <ExternalLink href="https://www.ipa.go.jp/jinzai/mitou/2019/20190607.html">未踏IT人材発掘・育成事業</ExternalLink> 採択
            </Event>
          </Career>
        </Content>
      </Row>
      <SnsList/>
    </Container>
    <Image />
  </Wrapper>
);

const Wrapper = styledComponents.div`
  margin: 0 auto;
  padding: 2rem 1rem 2rem;
  max-width: 70rem;
  flex-wrap: wrap-reverse;
  justify-content: start;
  display: flex;
`;

const Container = styledComponents.div`
  flex: 3 1;
  min-width: 25rem;
  margin-right: 1rem;
  margin-bottom: 2rem;
`;

const Row = styledComponents.div`
  display: flex;
  margin-bottom: 3rem;
`;

const Title = styledComponents.h2`
  font-size: 2rem;
  font-weight: 600;
  flex: 0 0 10rem;
`;

const Content = styledComponents.div`
  flex: 1 0;
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
  flex: 1 0 18rem;
  min-height: 35em;
  border-radius: 1rem;
  margin-bottom: 2rem;
`;
