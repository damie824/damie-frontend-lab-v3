import React, { Dispatch, SetStateAction } from "react";
import {
  Button,
  ScrollView,
  Window,
  WindowContent,
  WindowHeader,
} from "react95";

export default function ProjectWindows(props: {
  title: string;
  contents: JSX.Element;
  onClose: Dispatch<SetStateAction<{ title: string; contents: JSX.Element }>>;
}) {
  return (
    <Window
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
      }}
    >
      <WindowHeader
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>{props.title}</h2>
        <Button
          onClick={() =>
            props.onClose({
              title: props.title,
              contents: props.contents,
            })
          }
        >
          ＿
        </Button>
      </WindowHeader>
      <WindowContent>
        <ScrollView
          style={{
            height: "400px",
            padding: "0 20px ",
          }}
        >
          {props.contents}
        </ScrollView>
      </WindowContent>
    </Window>
  );
}
