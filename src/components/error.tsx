import { Button, Window, WindowContent, WindowHeader } from "react95";
import ErrorIMG from "../assets/error.png";

export default function ErrorWindow(props: {
  title: string;
  message: string;
  buttons: React.ReactNode[];
}) {
  return (
    <Window
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <WindowHeader
        style={{
          width: "90vw",
          maxWidth: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>Error</h2>
        <Button disabled>
          <p>X</p>
        </Button>
      </WindowHeader>
      <WindowContent>
        <div
          style={{
            display: "flex",
          }}
        >
          <img
            src={ErrorIMG}
            style={{
              width: 50,
              height: "auto",
              marginRight: 20,
            }}
            alt="404"
          />
          <div>
            <h2
              style={{
                fontWeight: "bold",
              }}
            >
              {props.title}
            </h2>
            <p>{props.message}</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 20,
          }}
        >
          {props.buttons.map((button, index) => {
            return <div key={index}>{button}</div>;
          })}
        </div>
      </WindowContent>
    </Window>
  );
}
