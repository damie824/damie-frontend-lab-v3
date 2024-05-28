import { Anchor, Hourglass, Tooltip } from "react95";
import { Description, Title } from "../../../components/typography";

export default function NowProjects() {
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
        프로젝트 오딘은 제가 최근 개발하고 있는 게임 유통 플랫폼이에요.
      </Description>
      <br />
      <Description>주 타겟은 "인디 게임"을 대상으로 하고 있어요.</Description>
      <Description>사용자 지정 수수료 정책, 트래커 차단 기능 등</Description>
      <Description>인디 게이머를 위한 여러 정책을 채용했어요.</Description>
      <br />
      <Description>
        자세한 정보는{" "}
        <Anchor href="https://alpha.odin.damie.works" target="_blank">
          여기
        </Anchor>
        에서 확인하실 수 있어요.
      </Description>

      <Title
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        Polaris
      </Title>
      <Description>폴라리스는 제 첫 게임 개발 프로젝트에요</Description>
      <br />
      <Description>
        Unity와 WinAPI를 적극 활용해 더욱 신선한 경험을 주는
      </Description>
      <Description>
        새로운 인디 게임을 제작해 보기 위해 기획하고 있어요.
      </Description>
      <br />
    </>
  );
}
