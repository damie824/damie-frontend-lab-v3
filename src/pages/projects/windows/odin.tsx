import { Anchor, GroupBox, Hourglass, Tooltip } from "react95";
import {
  Description,
  Title,
  UnorderedList,
} from "../../../components/typography";

export default function ProjectOdin() {
  return (
    <>
      <Title
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        프로젝트 오딘
        <Tooltip
          text="진행 중인 프로젝트에요!"
          enterDelay={100}
          leaveDelay={500}
        >
          <Hourglass size={33} />
        </Tooltip>
      </Title>
      <Description>
        프로젝트 오딘은 인디 게임을 위한 게임 유통 플랫폼이에요.
      </Description>
      <br />
      <Description>주 타겟은 "인디 게임"을 대상으로 하고 있어요.</Description>
      <Description>사용자 지정 수수료 정책, 트래커 차단 기능 등</Description>
      <Description>인디 게이머를 위한 여러 정책을 채용했어요.</Description>
      <br />
      <GroupBox label="기술 스택">
        <GroupBox label="클라이언트">
          <UnorderedList>
            <li>Tauri</li>
            <li>React.js</li>
            <li>TypeScript</li>
            <li>SCSS</li>
            <li>Rust</li>
            <li>Discord-RPC</li>
          </UnorderedList>
        </GroupBox>
        <GroupBox
          style={{
            marginTop: 20,
          }}
          label="서버"
        >
          <UnorderedList>
            <li>Nest.js</li>
            <li>TypeScript</li>
            <li>PostgreSQL</li>
            <li>TypeORM</li>
            <li>Passport</li>
            <li>JWT</li>
            <li>AWS S3</li>
          </UnorderedList>
        </GroupBox>
      </GroupBox>
      <br />
      <Description>
        자세한 정보는{" "}
        <Anchor href="https://odinus.shop/" target="_blank">
          여기
        </Anchor>
        에서 확인하실 수 있어요.
      </Description>
      <br />
    </>
  );
}
