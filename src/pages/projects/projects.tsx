import { useState } from "react";
import ProjectIcons from "../../components/projects/icons";
import ProjectWindows from "../../components/projects/windows";
import ProjectOdin from "./windows/odin";

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
        img="/projects/odin.png"
        title="Odin"
        changeWindow={setContents}
        openWindow={setIsOpened}
        contents={<ProjectOdin />}
      />
    </div>
  );
}
