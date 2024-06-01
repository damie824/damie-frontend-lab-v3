import { useState } from "react";
import ProjectIcons from "../../components/projects/icons";
import ProjectWindows from "../../components/projects/windows";
import ProjectOdin from "./windows/odin";
import ProjectDphsAdviser from "./windows/dphs-adviser";

export default function Projects() {
  const [isOpened, setIsOpened] = useState(false);
  const [content, setContents] = useState({
    title: "",
    contents: <></>,
  });

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      {isOpened && (
        <ProjectWindows
          title={content.title}
          contents={content.contents}
          onClose={() => {
            setIsOpened(false);
          }}
        />
      )}
      <ProjectIcons
        img="/projects/dphs-adviser.png"
        title="대평고 학습 도우미"
        changeWindow={setContents}
        openWindow={setIsOpened}
        contents={<ProjectDphsAdviser />}
      />
      <ProjectIcons
        img="/projects/odin.png"
        title="Odin"
        changeWindow={setContents}
        openWindow={setIsOpened}
        contents={<ProjectOdin />}
      />
    </div>
  );
}
