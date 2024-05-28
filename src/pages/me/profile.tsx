import {
  Avatar,
  Button,
  GroupBox,
  ProgressBar,
  TreeLeaf,
  TreeView,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";
import { SubTitle, Title } from "../../components/typography";
import { useEffect, useState } from "react";

export default function Profile() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((previousPercent) => {
        if (previousPercent === 100) {
          clearInterval(timer);
          return previousPercent;
        }
        const diff = Math.random() * 10;
        return Math.min(previousPercent + diff, 100);
      });
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const categories: TreeLeaf<string>[] = [
    {
      id: "links",
      label: "Links",
      icon: <>🔗</>,
      items: [
        {
          id: "github",
          label: "Github",
          icon: <>🐱</>,
          items: [
            { id: "https://github.com/damie824", label: "Me", icon: <>🎨</> },
            {
              id: "https://github.com/odin-store",
              label: "Odin",
              icon: <>🧙‍</>,
            },
          ],
        },
        {
          id: "community",
          label: "SNS",
          icon: <>💭</>,
          items: [
            {
              id: "https://www.instagram.com/ekal_.index/",
              label: "Instagram",
              icon: <>✨</>,
            },
            {
              id: "https://www.instagram.com/ekal_.index/",
              label: "Discord",
              icon: <>🔥</>,
            },
          ],
        },
      ],
    },
    {
      id: "etc",
      label: "ETC",
      icon: <>🎸</>,
      items: [
        {
          id: "mailTo:admin@damie.works",
          label: "Email",
          icon: <>📧</>,
        },
      ],
    },
  ];

  if (percent !== 100) {
    return (
      <main>
        <Window
          style={{
            width: "90vw",
            maxWidth: 400,
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <WindowHeader
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2>My Profile</h2>
            <Button disabled>
              <p>X</p>
            </Button>
          </WindowHeader>
          <WindowContent>
            {" "}
            <ProgressBar value={Math.floor(percent)} />
          </WindowContent>
        </Window>
      </main>
    );
  }

  return (
    <main>
      <Window
        style={{
          width: "90vw",
          maxWidth: 400,
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <WindowHeader
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2>My Profile</h2>
          <Button disabled>
            <p>X</p>
          </Button>
        </WindowHeader>
        <WindowContent>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Avatar size={200} src={"/profile/profile.jpg"} />
            <Title>Lee Gyu Yeon</Title>
            <SubTitle>Junior Frontend Engineer</SubTitle>
          </div>
          <GroupBox>
            <TreeView
              tree={categories}
              onNodeSelect={(node, id) => {
                if (/^(https?:\/\/|mailTo:)/.test(id)) {
                  window.open(id, "_blank");
                }
              }}
            />
          </GroupBox>
        </WindowContent>
      </Window>
    </main>
  );
}
