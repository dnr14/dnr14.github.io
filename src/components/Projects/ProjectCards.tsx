import styled from '@emotion/styled';
import { hoverTextUnderline, mobile } from 'components/Common/GlobalStyle';
import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectCarousel from './ProjectCarousel';
import todoList1 from 'images/projects/todoList/todoList1.png';
import todoList2 from 'images/projects/todoList/todoList2.png';
import covid19_1 from 'images/projects/covid19/covid19_1.gif';
import covid19_2 from 'images/projects/covid19/covid19_2.gif';
import covid19_3 from 'images/projects/covid19/covid19_3.gif';
import covid19_4 from 'images/projects/covid19/covid19_4.png';
import mega1 from 'images/projects/mega/mega1.png';
import mega2 from 'images/projects/mega/mega2.png';
import mega3 from 'images/projects/mega/mega3.png';
import mega4 from 'images/projects/mega/mega4.png';
import mega5 from 'images/projects/mega/mega5.png';
import velog1 from 'images/projects/velog/velog1.gif';
import velog2 from 'images/projects/velog/velog2.gif';
import velog3 from 'images/projects/velog/velog3.gif';
import velog4 from 'images/projects/velog/velog4.gif';
import velog5 from 'images/projects/velog/velog5.gif';
import costco from 'images/projects/sites/costco.png';
import homeplus from 'images/projects/sites/homeplus.png';
import ikea from 'images/projects/sites/ikea.png';
import naver from 'images/projects/sites/naver.png';
import netmarble from 'images/projects/sites/netmarble.png';
import overwatch from 'images/projects/sites/overwatch.png';
import starbucks from 'images/projects/sites/starbucks.png';
import _2048 from 'images/projects/games/2048.png';
import calcurator from 'images/projects/games/calcurator.png';
import calrander from 'images/projects/games/calrander.png';
import card from 'images/projects/games/card.png';
import mole from 'images/projects/games/mole.png';
import omok from 'images/projects/games/omok.png';
import paintbrush from 'images/projects/games/paintbrush.png';
import snake from 'images/projects/games/snake.png';
import tetris from 'images/projects/games/tetris.png';
import portfolio1 from 'images/projects/portfolio/portfolio1.png';
import portfolio2 from 'images/projects/portfolio/portfolio2.png';
import portfolio3 from 'images/projects/portfolio/portfolio3.png';

const ProjectCards = () => {
  const bookpieImgs = [
    'https://user-images.githubusercontent.com/69706762/154174595-263e910f-220a-4427-83fa-2b9c8758b725.gif',
    'https://user-images.githubusercontent.com/26589722/156022856-202a470e-c680-4987-927e-eb836b26b890.gif',
    'https://user-images.githubusercontent.com/69706762/154178675-a635d3b4-2aa8-460b-903b-8ed7fae23fca.gif',
    'https://user-images.githubusercontent.com/26589722/156023317-ad894061-6dc5-418a-bb5a-36acc82addeb.gif',
    'https://user-images.githubusercontent.com/69706762/154181241-9e9ef616-8109-4312-8d40-def55d179655.gif',
  ];

  const sitesImg = [
    costco,
    homeplus,
    ikea,
    naver,
    netmarble,
    overwatch,
    starbucks,
  ];

  const games = [
    tetris,
    snake,
    omok,
    card,
    mole,
    _2048,
    calcurator,
    calrander,
    paintbrush,
  ];

  return (
    <div>
      <ProjectCard
        title={`웹사이트 클론 프로젝트`}
        period="📆 2021.06.04 ~ 2021.07.23 (1人 개인 프로젝트)"
      >
        <ProjectCarousel imgs={sitesImg} />
        <div>
          <ProjectsDescriptionsMain>
            <b>
              웹사이트 클론을 통해서 HTML, CSS, JavaScript 실력을 키우기 위해
              진행한 프로젝트
            </b>
            입니다.
            <P />
            프로젝트를 통해{' '}
            <b className="textHighlight">
              HTML 태그, CSS 스타일링, JavaScript 개념 등을 배울 수 있었습니다.
            </b>
          </ProjectsDescriptionsMain>

          <ProjectsDescription>
            <ProjectLabel>GitHub</ProjectLabel>
            <ProjectValue>
              <ProjectsUrl
                href="https://github.com/dnr14/siteClone-project"
                target={'_blank'}
              >
                https://github.com/dnr14/siteClone-project
              </ProjectsUrl>
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>URL</ProjectLabel>
            <ProjectValue>
              <ProjectsUrl
                href="https://dnr14.github.io/sites/costcoClone"
                target={'_blank'}
              >
                코스트코 https://dnr14.github.io/sites/costcoClone
              </ProjectsUrl>
              <ProjectsUrl
                href="https://dnr14.github.io/sites/homeplusClone
"
                target={'_blank'}
              >
                홈플러스 https://dnr14.github.io/sites/homeplusClone
              </ProjectsUrl>
              <ProjectsUrl
                href="https://dnr14.github.io/sites/ikeaClone"
                target={'_blank'}
              >
                이케아 https://dnr14.github.io/sites/ikeaClone
              </ProjectsUrl>
              <ProjectsUrl
                href="https://dnr14.github.io/sites/naverClone"
                target={'_blank'}
              >
                네이버 https://dnr14.github.io/sites/naverClone
              </ProjectsUrl>
              <ProjectsUrl
                href="https://dnr14.github.io/sites/netmarbleClone"
                target={'_blank'}
              >
                넷마블 https://dnr14.github.io/sites/netmarbleClone
              </ProjectsUrl>
              <ProjectsUrl
                href="https://dnr14.github.io/sites/overwatchClone"
                target={'_blank'}
              >
                오버워치 https://dnr14.github.io/sites/overwatchClone
              </ProjectsUrl>
              <ProjectsUrl
                href="https://dnr14.github.io/sites/starbucksClone"
                target={'_blank'}
              >
                스타벅스 https://dnr14.github.io/sites/starbucksClone
              </ProjectsUrl>
              <ProjectsUrl
                href="https://dnr14.github.io/sites/unknownSiteClone1"
                target={'_blank'}
              >
                https://dnr14.github.io/sites/unknownSiteClone1
              </ProjectsUrl>
              <ProjectsUrl
                href="https://dnr14.github.io/sites/unknownSiteClone2"
                target={'_blank'}
              >
                https://dnr14.github.io/sites/unknownSiteClone2
              </ProjectsUrl>
              <ProjectsUrl
                href="https://dnr14.github.io/sites/unknownSiteClone3"
                target={'_blank'}
              >
                https://dnr14.github.io/sites/unknownSiteClone3
              </ProjectsUrl>
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>Frontend</ProjectLabel>
            <ProjectValue>JavaScript, SASS, CSS, Gatsby.js</ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>Deployment</ProjectLabel>
            <ProjectValue>Github Page</ProjectValue>
          </ProjectsDescription>
        </div>
      </ProjectCard>
      <ProjectCard
        title={`Vainilla JavaScript 프로젝트`}
        period="📆 2021.05 ~ (1人 개인 프로젝트)"
      >
        <ProjectCarousel imgs={games} />
        <div>
          <ProjectsDescriptionsMain>
            <b>
              공부를하면서 작년 5월달 부터 바닐라 자바스크립트를 이용하여
              개발하였던 프로젝트들
            </b>
            입니다. 게임, 달력, 계산기, 그림판을 개발 했습니다.
            <P />
            바닐라 자바스크립트 프로젝트를 통해서{' '}
            <b className="textHighlight">
              자바스크립트에 대해 이해도가 더 깊어지고 문법에 익숙하게
              되었습니다.{' '}
            </b>
          </ProjectsDescriptionsMain>

          <ProjectsDescription>
            <ProjectLabel>GitHub</ProjectLabel>
            <ProjectValue>
              <ProjectsUrl
                href="https://github.com/dnr14/2048"
                target={'_blank'}
              >
                2048게임 https://github.com/dnr14/2048
              </ProjectsUrl>
              <ProjectsUrl
                href="https://github.com/dnr14/card-game"
                target={'_blank'}
              >
                카드뒤집기게임 https://github.com/dnr14/card-game
              </ProjectsUrl>
              <ProjectsUrl
                href="https://github.com/dnr14/mole-game"
                target={'_blank'}
              >
                두더지게임 https://github.com/dnr14/mole-game
              </ProjectsUrl>
              <ProjectsUrl
                href="https://github.com/dnr14/omok"
                target={'_blank'}
              >
                오목 https://github.com/dnr14/omok
              </ProjectsUrl>
              <ProjectsUrl
                href="https://github.com/dnr14/snake"
                target={'_blank'}
              >
                스네이크 https://github.com/dnr14/snake
              </ProjectsUrl>
              <ProjectsUrl
                href="https://github.com/dnr14/tetris"
                target={'_blank'}
              >
                테트리스 https://github.com/dnr14/tetris
              </ProjectsUrl>
              <ProjectsUrl
                href="https://github.com/dnr14/calculator"
                target={'_blank'}
              >
                계산기 https://github.com/dnr14/calculator
              </ProjectsUrl>
              <ProjectsUrl
                href="https://github.com/dnr14/paintbrush"
                target={'_blank'}
              >
                그림판 https://github.com/dnr14/paintbrush
              </ProjectsUrl>
              <ProjectsUrl
                href="https://github.com/dnr14/calendar"
                target={'_blank'}
              >
                달력 https://github.com/dnr14/calendar
              </ProjectsUrl>
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>URL</ProjectLabel>
            <ProjectValue>
              <ProjectsUrl
                href="https://dnr14.github.io/2048"
                target={'_blank'}
              >
                https://dnr14.github.io/2048
              </ProjectsUrl>
              <ProjectsUrl
                href="https://dnr14.github.io/cardgame"
                target={'_blank'}
              >
                https://dnr14.github.io/cardgame
              </ProjectsUrl>
              <ProjectsUrl
                href="https://dnr14.github.io/mole"
                target={'_blank'}
              >
                https://dnr14.github.io/mole
              </ProjectsUrl>
              <ProjectsUrl
                href="https://dnr14.github.io/omok"
                target={'_blank'}
              >
                https://dnr14.github.io/omok
              </ProjectsUrl>
              <ProjectsUrl
                href="https://dnr14.github.io/snake"
                target={'_blank'}
              >
                https://dnr14.github.io/snake
              </ProjectsUrl>
              <ProjectsUrl
                href="https://dnr14.github.io/tetris"
                target={'_blank'}
              >
                https://dnr14.github.io/tetris
              </ProjectsUrl>
              <ProjectsUrl
                href="https://dnr14.github.io/calcurator"
                target={'_blank'}
              >
                https://dnr14.github.io/calcurator
              </ProjectsUrl>
              <ProjectsUrl
                href="https://dnr14.github.io/paintbrush"
                target={'_blank'}
              >
                https://dnr14.github.io/paintbrush
              </ProjectsUrl>
              <ProjectsUrl
                href="https://dnr14.github.io/calendar"
                target={'_blank'}
              >
                https://dnr14.github.io/calendar
              </ProjectsUrl>
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>Frontend</ProjectLabel>
            <ProjectValue>JavaScript, SASS, CSS, Gatsby.js</ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>Deployment</ProjectLabel>
            <ProjectValue>Github Page</ProjectValue>
          </ProjectsDescription>
        </div>
      </ProjectCard>
      <ProjectCard
        title="Todo List"
        period="📆 2021.07.22 ~ 2021.07.26 (1人 개인 프로젝트)"
      >
        <ProjectCarousel imgs={[todoList1, todoList2]} />
        <div>
          <ProjectsDescriptionsMain>
            <b>
              매일매일 한걸음 씩 성장하기 위해 오늘 무엇을 해야 할지 간단히 적을
              수 있는 웹앱
            </b>
            입니다.
            <P />
            서버를 사용하지 않았고 사용자의 할 일을 저장하기 위해 로컬스토리지를
            이용하였습니다. 이미 <b className="textHighlight">JavaScript</b>로
            만들어진 프로젝트였지만 <b className="textHighlight">TypeScript</b>
            를 공부를 하면서 TypeScript 프로젝트로 마이그레이션을
            진행하였습니다.
          </ProjectsDescriptionsMain>
          <ProjectsDescription>
            <ProjectLabel>주요 기능</ProjectLabel>
            <ProjectValue className="highlight">
              최대 10개 까지 할일을 작성, 사용자가 지우기 전까지 할일은 유지
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>GitHub</ProjectLabel>
            <ProjectValue>
              <ProjectsUrl
                href="https://github.com/dnr14/react-todo-List"
                target={'_blank'}
              >
                https://github.com/dnr14/react-todo-List
              </ProjectsUrl>
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>URL</ProjectLabel>
            <ProjectValue>
              <ProjectsUrl
                href="https://dnr14.github.io/todoList/"
                target={'_blank'}
              >
                https://dnr14.github.io/todoList
              </ProjectsUrl>
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>Frontend</ProjectLabel>
            <ProjectValue>React, TypeScript</ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>Deployment</ProjectLabel>
            <ProjectValue>Github Page</ProjectValue>
          </ProjectsDescription>
        </div>
      </ProjectCard>
      <ProjectCard
        title="COVID19 프로젝트"
        period="📆 2021.07.24 ~ 2021.08.08 (1人 개인 프로젝트)"
      >
        <ProjectCarousel imgs={[covid19_1, covid19_2, covid19_3, covid19_4]} />
        <div>
          <ProjectsDescriptionsMain>
            <b>
              공공 API를 활용하여 코로나 진행 상황을 그래프로 볼 수 있으면
              사용자에게 의미 있는 사이트를 제공 할 수 있을 거라 생각해서 개발
            </b>
            하였습니다.
            <P />
            <b className="textHighlight">D3</b>를 이용하여 공공 API 데이터를
            시각화하여 차트로 보여줍니다. 공공 API의 CORS 이슈를 해결하기위해{' '}
            <b className="textHighlight">Express</b>를 사용하였습니다.
            프로젝트를 통해서 CORS에 대한 개념과 해결방안을 배울 수 있었고 D3를
            공부하며 간단한 차트를 만들 수 있게 되었습니다. 실제 배포를 통해서
            배포 과정을 배울 수 있었습니다.
          </ProjectsDescriptionsMain>
          <ProjectsDescription>
            <ProjectLabel>주요 기능</ProjectLabel>
            <ProjectValue className="highlight">
              <b className="textHighlight">
                다양한 코로나 데이터를 차트로 보여주기, 원하는 날짜 데이터 검색
              </b>
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>GitHub</ProjectLabel>
            <ProjectValue>
              <ProjectsUrl
                href="https://github.com/dnr14/covid19-react-app"
                target={'_blank'}
              >
                https://github.com/dnr14/covid19-react-app
              </ProjectsUrl>
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>URL</ProjectLabel>
            <ProjectValue>
              <ProjectsUrl
                href="http://www.react-covid19.p-e.kr/"
                target={'_blank'}
              >
                http://www.react-covid19.p-e.kr/
              </ProjectsUrl>
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>Frontend</ProjectLabel>
            <ProjectValue>React, D3</ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>Backend</ProjectLabel>
            <ProjectValue>Express</ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>Deployment</ProjectLabel>
            <ProjectValue>AWS(EC2), Nginx</ProjectValue>
          </ProjectsDescription>
        </div>
      </ProjectCard>
      <ProjectCard
        title="메가 커피 클론 프로젝트 "
        period="📆 2021.10.13 ~ 2022.11.20 (1人 개인 프로젝트)"
      >
        <ProjectCarousel imgs={[mega1, mega2, mega3, mega4, mega5]} />
        <div>
          <ProjectsDescriptionsMain>
            <b>
              자주 이용하는 메가 커피에 사이트는 사용자의 의견을 건의받는
              게시판이 없습니다. 이용하는 사용자가 무엇을 원하는지 의견을 받을
              수가 있는 게시판이 있으면 좋겠다고 생각해서 만들게
            </b>
            되었습니다.
            <P />
            <b className="textHighlight">Express</b>와{' '}
            <b className="textHighlight">MongoDB</b>를 이용하여 API 서버를
            구성하였습니다. <b className="textHighlight">JWT 방식을 이용하여</b>{' '}
            사용자의 인증 처리 했습니다.
            <P />
            CRA를 이용을 하지 않고 <b className="textHighlight">
              Webpack
            </b>과 <b className="textHighlight">Babel</b>을 처음부터 작성하여
            리액트 개발환경을 구성하였습니다.{' '}
            <b className="textHighlight">Nginx</b>를 이용하여 리버스 프록시
            환경을 구성을 하였습니다.
            <P />
            프론트, 백엔드를 혼자 개발하면서 웹 서비스에 대한 전체 흐름을
            경험하고 배울 수 있었습니다.
          </ProjectsDescriptionsMain>
          <ProjectsDescription>
            <ProjectLabel>주요 기능</ProjectLabel>
            <ProjectValue className="highlight">
              <b className="textHighlight">
                사용자(건의게시판), 관리자(메뉴 등록, 사용자 관리)
              </b>
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>GitHub</ProjectLabel>
            <ProjectValue>
              <ProjectsUrl
                href="https://github.com/dnr14/megaCoffee-react-app"
                target={'_blank'}
              >
                https://github.com/dnr14/megaCoffee-react-app
              </ProjectsUrl>
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>URL</ProjectLabel>
            <ProjectValue>
              <ProjectsUrl
                href="http://megacoffee-project.s3-website.ap-northeast-2.amazonaws.com/"
                target={'_blank'}
              >
                http://megacoffee-project.s3-website.ap-northeast-2.amazonaws.com/
              </ProjectsUrl>
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>Frontend</ProjectLabel>
            <ProjectValue>React, Styled-components, Redux/tookit</ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>Backend</ProjectLabel>
            <ProjectValue>Express</ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>Database</ProjectLabel>
            <ProjectValue>MongoDB</ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>Deployment</ProjectLabel>
            <ProjectValue>AWS(EC2, S3, CloudFront)</ProjectValue>
          </ProjectsDescription>
        </div>
      </ProjectCard>
      <ProjectCard
        title="벨로그 클론 프로젝트"
        period="📆 2021.11.02 ~ 2021.11.09 (2人 팀 프로젝트)"
      >
        <ProjectCarousel imgs={[velog1, velog2, velog3, velog4, velog5]} />
        <div>
          <ProjectsDescriptionsMain>
            <b>
              DevFoliOh, Couch Coding 에서 개최하는 리액트 토이 프로젝트입니다.
              프로젝트를 위한 Backend는 이미 구축되어있고 제공되는 API를
              사용하여 일주일 동안 개발을 하는 프로젝트입니다.
            </b>
            <P />
            CRA를 이용하지 않고 <b className="textHighlight">Webpack</b>,{' '}
            <b className="textHighlight">Babel</b>,{' '}
            <b className="textHighlight">ESLint</b>,{' '}
            <b className="textHighlight">Prettier</b>를 이용하여 바닥부터 개발
            환경을 구축하였습니다.
            <P />
            API 문서를 제공하는 스웨거를 보면서 기능을 구현하였습니다.{' '}
            팀프로젝트를 진행하면서 Git을 더 잘 사용하게 되었고{' '}
            <b className="textHighlight">Git Flow</b>를 경험하고 배울 수
            있었습니다.{' '}
            <b className="textHighlight">다른 개발자와 협업하는 과정</b>에 관해
            배울 수 있었습니다.
          </ProjectsDescriptionsMain>
          <ProjectsDescription>
            <ProjectLabel>주요 기능</ProjectLabel>
            <ProjectValue className="highlight">
              <b className="textHighlight">
                게시글(CRUD), 게시글 댓글(CRUD), 게시글 검색
              </b>
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>GitHub</ProjectLabel>
            <ProjectValue>
              <ProjectsUrl
                href="https://github.com/dnr14/velog-react-app"
                target={'_blank'}
              >
                https://github.com/dnr14/velog-react-app
              </ProjectsUrl>
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>URL</ProjectLabel>
            <ProjectValue>
              <ProjectsUrl
                href="https://d3kinchzmkbtue.cloudfront.net/"
                target={'_blank'}
              >
                https://d3kinchzmkbtue.cloudfront.net/
              </ProjectsUrl>
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>Frontend</ProjectLabel>
            <ProjectValue>
              React, Styled-components, Redux, ESLint, Prettier, Webpack
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>Deployment</ProjectLabel>
            <ProjectValue>AWS(EC2, S3), Nginx, Git Action</ProjectValue>
          </ProjectsDescription>
        </div>
      </ProjectCard>
      <ProjectCard
        title={`책을 중심으로 한 중고거래 플랫폼 BookPie 프로젝트`}
        period="📆 2021.12.13 ~ 2022.02.13 (4人 팀 프로젝트)"
      >
        <ProjectCarousel imgs={bookpieImgs} />
        <div>
          <ProjectsDescriptionsMain>
            <b>
              당근마켓의 중고거래 기능과 왓챠피디아의 리뷰 기능을 결합한
              중고거래 사이트
            </b>
            입니다. 안읽는 책은 중고로 팔 수 있도록 사용자 중계를 해주고 궁금한
            책은 검색을 통해서 사용자에게 리뷰를 제공합니다.
            <P />
            <b className="textHighlight">백 엔드 개발자와 협업하는 과정</b>에
            관해 많이 배울 수 있었습니다. 필요한 명세를 문서로 작성하여
            소통하였고, 필요한 지식도 함께 공유하며 학습할 수 있었습니다.
            <P />
            <b className="textHighlight">테스트 환경을 구축</b>을 하여 프론트,
            백엔드 협업자와 개발을 공유하며 이중 체크를 통해 실제 배포를
            하기전에 버그를 찾으며 개발을 진행하였습니다.{' '}
            <b className="textHighlight">Jenkins, Git Action</b>을 사용하여
            CI,CD 환경을 구축하고 경험 할 수 있었습니다.
          </ProjectsDescriptionsMain>
          <ProjectsDescription>
            <ProjectLabel>주요 기능</ProjectLabel>
            <ProjectValue className="highlight">
              <b className="textHighlight">
                소셜 로그인, 선호 장르 차트, 마이페이지, 타회원 마이페이지
                <br />
                통합검색, 중고장터, 리뷰, 중고상품 추천,포인트 결제
              </b>
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>GitHub</ProjectLabel>
            <ProjectValue>
              <ProjectsUrl
                href="https://github.com/Book-Pie/FE"
                target={'_blank'}
              >
                https://github.com/Book-Pie/FE
              </ProjectsUrl>
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>URL</ProjectLabel>
            <ProjectValue>
              <ProjectsUrl
                href="http://dzjv6uzpvhcwz.cloudfront.net/"
                target={'_blank'}
              >
                http://dzjv6uzpvhcwz.cloudfront.net/
              </ProjectsUrl>
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>Frontend</ProjectLabel>
            <ProjectValue>
              TypeScript, React, Styled-components, Redux/tookit, ESLint,
              Prettier, Webpack
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>Deployment</ProjectLabel>
            <ProjectValue>
              AWS(EC2, S3, CloudFront), Nginx, Git Action, Jenkins, Docker
            </ProjectValue>
          </ProjectsDescription>
        </div>
      </ProjectCard>
      <ProjectCard
        title={`포트폴리오 웹사이트`}
        period="📆 2022.02.18 ~ 2022.02.21 (1人 개인 프로젝트)"
      >
        <ProjectCarousel imgs={[portfolio1, portfolio2, portfolio3]} />
        <div>
          <ProjectsDescriptionsMain>
            <b>포트폴리오 용도로 제작한 웹사이트</b>
            입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다.
            <P />
            <b className="textHighlight">Gatsby.js</b>를 이용하여
            개발하였습니다. Github에서 제공하는 호스팅 서비스 Github Page를
            이용하여 배포하였습니다.
            <P />
          </ProjectsDescriptionsMain>
          <ProjectsDescription>
            <ProjectLabel>주요 기능</ProjectLabel>
            <ProjectValue className="highlight">
              <b className="textHighlight">
                간단한 자기소개, 인적 사항, 기술 스택, GitHub링크, 프로젝트
                경험,
              </b>
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>GitHub</ProjectLabel>
            <ProjectValue>
              <ProjectsUrl
                href="https://github.com/dnr14/dnr14.github.io"
                target={'_blank'}
              >
                https://github.com/dnr14/dnr14.github.io
              </ProjectsUrl>
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>URL</ProjectLabel>
            <ProjectValue>
              <ProjectsUrl href="https://dnr14.github.io/" target={'_blank'}>
                https://dnr14.github.io/
              </ProjectsUrl>
            </ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>Frontend</ProjectLabel>
            <ProjectValue>Gatsby.js, Emotion</ProjectValue>
          </ProjectsDescription>
          <ProjectsDescription>
            <ProjectLabel>Deployment</ProjectLabel>
            <ProjectValue>Github Page</ProjectValue>
          </ProjectsDescription>
        </div>
      </ProjectCard>
    </div>
  );
};

const ProjectsDescriptionsMain = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4rem;

  b.textHighlight {
    color: #ed3770;
    font-weight: 400;
  }
`;

const ProjectsDescription = styled.div`
  margin-bottom: 1rem;
`;

const ProjectLabel = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 8.4rem;
  font-weight: 900;
  font-size: 1rem;
  ::before {
    content: '✔';
    display: inline;
    padding-right: 0.5rem;
    ${mobile} {
      display: none;
    }
  }

  ${mobile} {
    display: table;
    width: auto;
    padding-left: 0.5rem;
    margin-bottom: 0.25rem;
    border-left: 5px solid #222;
  }
`;

const ProjectValue = styled.div`
  display: inline-block;
  vertical-align: bottom;
  width: calc(100% - 8.4rem);
  font-weight: 400;
  font-size: 1rem;
  ${mobile} {
    width: 100%;
  }
  &.highlight {
    font-weight: 700;
  }
`;

const ProjectsUrl = styled.a`
  display: block;
  color: #258ddb;
  cursor: pointer;
  word-break: break-all;
  ${hoverTextUnderline}
`;

const P = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

export default ProjectCards;
