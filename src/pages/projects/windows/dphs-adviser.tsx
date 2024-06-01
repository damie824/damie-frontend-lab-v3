import { Anchor, GroupBox, Hourglass, Tooltip } from "react95";
import {
  Description,
  Title,
  UnorderedList,
} from "../../../components/typography";

export default function ProjectDphsAdviser() {
  return (
    <>
      <Title
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        대평고 학습 도우미
      </Title>
      <Description>
        대평고 학생들을 위해 급식, 시간표 등의 정보를 제공하는 무료
        애플리케이션이에요.
      </Description>
      <br />
      <Description>
        Nies 교육정보 개방 포털에서 정보를 가져와 유저에게 보여줘요.
      </Description>
      <Description>
        학생들의 학교 생활을 쉽게 도울 수 있도록 설계하였어요.
      </Description>
      <br />
      <GroupBox label="기술 스택">
        <UnorderedList>
          <li>React Native</li>
          <li>Expo</li>
        </UnorderedList>
      </GroupBox>
      <br />
      <Description>
        안드로이드는{" "}
        <Anchor
          href="https://play.google.com/store/apps/details?id=com.damie824.dphsadviser&pli=1"
          target="_blank"
        >
          여기
        </Anchor>
        에서,
      </Description>
      <Description>
        IOS는{" "}
        <Anchor
          href="https://apps.apple.com/kr/app/%EB%8C%80%ED%8F%89%EA%B3%A0-%ED%95%99%EC%8A%B5-%EB%8F%84%EC%9A%B0%EB%AF%B8/id6464079259"
          target="_blank"
        >
          여기
        </Anchor>
        에서 다운로드하실 수 있어요.
      </Description>
      <br />
    </>
  );
}
