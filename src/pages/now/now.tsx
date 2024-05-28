import { useState } from "react";
import {
  Tab,
  TabBody,
  Tabs,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";
import NowProjects from "./posts/projects";
import NowStudy from "./posts/study";
import NowHobby from "./posts/hobby";
import NowBook from "./books/book";

export default function NowPage() {
  const [current, setCurrent] = useState({
    activeTab: 0,
  });

  const handeChange = (
    value: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log(value, event);
    setCurrent({
      activeTab: value,
    });
  };

  return (
    <main>
      <Window
        style={{
          width: "95vw",
          maxWidth: "900px",
          margin: "10px auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <WindowHeader
          style={{
            paddingLeft: 10,
          }}
        >
          <h1>요즘 이런 것들에 관심을 가지고 있어요.</h1>
        </WindowHeader>
        <WindowContent>
          <Tabs value={current.activeTab} onChange={handeChange}>
            <Tab value={0}>Projects</Tab>
            <Tab value={1}>Study</Tab>
            <Tab value={2}>Hobby</Tab>
          </Tabs>
          <TabBody>
            {current.activeTab === 0 && <NowProjects />}
            {current.activeTab === 1 && <NowStudy />}
            {current.activeTab === 2 && <NowHobby />}
          </TabBody>
        </WindowContent>
      </Window>
      <Window
        style={{
          width: "95vw",
          maxWidth: "900px",
          margin: "10px auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <WindowHeader
          style={{
            paddingLeft: 10,
          }}
        >
          <h1>이런 책들을 읽고 있기도 하고요..</h1>
        </WindowHeader>
        <WindowContent>
          <NowBook
            title="리액트를 다루는 기술"
            thumbnail="https://image.yes24.com/goods/79260300/XL"
            contents="리액트를 적용해보면서 실전 감각을 익힌다. UI 업데이트 과정을 간결하게, 복잡한 애플리케이션 개발도 컴포넌트 기반으로 쉽게, 자바스크립트 개발을 손쉽게."
          />
        </WindowContent>
      </Window>
      <Window
        style={{
          width: "95vw",
          maxWidth: "900px",
          margin: "10px auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <WindowHeader
          style={{
            paddingLeft: 10,
          }}
        >
          <h1>이런 음악을 즐겨 듣고 있어요!</h1>
        </WindowHeader>
        <WindowContent>
          <iframe
            style={{
              borderRadius: "12px",
            }}
            src="https://open.spotify.com/embed/track/2iUXsYOEPhVqEBwsqP70rE?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            style={{
              borderRadius: "12px",
              marginTop: "12px",
            }}
            src="https://open.spotify.com/embed/track/4X2QkgUdx2j1hty86hhcn4?utm_source=generator"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </WindowContent>
      </Window>
    </main>
  );
}
