import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

export default function ProjectIcons(props: {
  img: string;
  title: string;
  contents: JSX.Element;
  changeWindow: Dispatch<
    SetStateAction<{ title: string; contents: JSX.Element }>
  >;
  openWindow: Dispatch<SetStateAction<boolean>>;
}) {
  const id = encodeURIComponent(props.title).replace(/%/g, "").toLowerCase();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "60px",
        overflow: "hidden",
      }}
      id={`${id}`}
      onClick={() => {
        const text = document.getElementById(`${id}`);
        if (text) {
          const range = document.createRange();
          range.selectNode(text);
          const selection = window.getSelection();
          if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
          }
        }
      }}
      onDoubleClick={() => {
        props.changeWindow({
          title: props.title,
          contents: props.contents,
        });
        props.openWindow(true);
      }}
    >
      <Image
        style={{
          width: "50px",
        }}
        src={props.img}
      />
      <Text
        style={{
          fontSize: 12,
          marginBottom: 20,
          marginTop: 10,
        }}
        value={props.title}
        disabled
      />
    </div>
  );
}

const Image = styled.img`
  &:focus {
    background-color: blue;
  }
  width: 50px;
`;

const Text = styled.input`
  &:focus {
    background-color: blue;
  }
  &:disabled {
    color: inherit;
  }
  background-color: transparent;
  border: none;
  outline: none;
  width: fit-content;
  text-align: center;
`;
