import {
  Anchor,
  GroupBox,
  ScrollView,
  Tooltip,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";
import { Title, UnorderedList } from "../../components/typography";
import styled from "styled-components";

export default function About() {
  return (
    <main>
      <Window
        style={{
          width: "100%",
          height: "fit-content",
          maxWidth: "900px",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -53%)",
        }}
      >
        <WindowHeader>
          <h1>About Me</h1>
        </WindowHeader>
        <WindowContent>
          <ScrollView
            style={{
              height: "80vh",
              paddingLeft: 10,
            }}
          >
            <Title>이규연 / Damie</Title>

            {/** 기본적인 정보 */}
            <GroupBox
              style={{
                marginTop: 20,
              }}
              label="기본적인 정보"
            >
              <UnorderedList>
                <li>코딩을 좋아하는 고등학생</li>
                <li>하위</li>
                <li>하위</li>
                <li>하위</li>
              </UnorderedList>
            </GroupBox>

            {/** 사용하는 언어 */}
            <GroupBox
              style={{
                marginTop: 20,
              }}
              label="사용하는 언어"
            >
              <GroupBox label="For Work">
                <UnorderedList>
                  <li>HTML / CSS</li>
                  <li>Javascript / Typescript</li>
                  <li>Rust</li>
                  <li>C++</li>
                </UnorderedList>
              </GroupBox>
              <GroupBox
                label="For Hobby"
                style={{
                  marginTop: 20,
                }}
              >
                <UnorderedList>
                  <li>C, C#</li>
                  <li>Java / Kotlin</li>
                  <li>Python</li>
                </UnorderedList>
              </GroupBox>
            </GroupBox>

            {/** 서비스들 */}
            <GroupBox label="서비스">
              {/** 운영중인 사이트들 */}
              <GroupBox
                style={{
                  marginTop: 20,
                }}
                label="운영 중인 서비스"
              >
                <UnorderedList>
                  <li>
                    <Anchor href="https://wiki.damie.kr/">대평위키</Anchor>
                  </li>
                  <li>
                    <Anchor href="https://alpha.odin.damie.works/">
                      대평고 학습 도우미
                    </Anchor>
                  </li>
                </UnorderedList>
              </GroupBox>

              {/** 개발 중인 사이트들 */}
              <GroupBox
                style={{
                  marginTop: 20,
                }}
                label="개발 중인 서비스"
              >
                <UnorderedList>
                  <li>
                    <Anchor href="https://alpha.odin.damie.works/">
                      프로젝트 오딘
                    </Anchor>
                  </li>
                  <li>DPUS</li>
                </UnorderedList>
              </GroupBox>

              {/** 운영이 중단된 서비스들 */}
              <GroupBox
                style={{
                  marginTop: 20,
                }}
                label="운영이 중단된 서비스"
              >
                <UnorderedList>
                  <Dissabled>Greencompass</Dissabled>
                  <Dissabled>InstaDaejeon</Dissabled>
                  <Dissabled>Onboxing</Dissabled>
                </UnorderedList>
              </GroupBox>
            </GroupBox>
          </ScrollView>
        </WindowContent>
      </Window>
    </main>
  );
}

const Dissabled = styled.li`
  text-decoration: line-through;
  opacity: 70%;
`;
