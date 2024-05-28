import { Window, WindowContent, WindowHeader } from "react95";

export default function MainPage() {
  return (
    <main>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <Window
          style={{
            width: "80%",
          }}
        >
          <WindowHeader>
            <h1>Damie Lab</h1>
          </WindowHeader>
          <WindowContent>
            <img
              src="/main/main.png"
              style={{
                width: "100%",
                height: "auto",
                userSelect: "none",
                pointerEvents: "none",
              }}
            />
          </WindowContent>
        </Window>
      </div>
    </main>
  );
}
