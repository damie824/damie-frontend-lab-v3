import { Anchor, Hourglass, Tooltip } from "react95";
import { Description, Title } from "../../../components/typography";

export default function NowStudy() {
  return (
    <>
      <Title
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        새로운 언어 배우기
      </Title>
      <Description>
        전 요즘 새로운 언어를 배우는 것에 관심을 가지고 있어요.
      </Description>
      <Description>
        Rust, C# 등 Row-Level 언어를 배우는 것에 재미를 느끼고 있고,
      </Description>
      <Description>
        Zig, Go, Dart 등 신생 언어를 학습하는 것에도 관심이 있어요.
      </Description>
    </>
  );
}
