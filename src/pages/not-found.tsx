import { Button } from "react95";
import ErrorWindow from "../components/error";

export default function NotFound() {
  return (
    <div>
      <ErrorWindow
        title="404 : Not Found"
        message="페이지를 찾을 수 없었어요."
        buttons={[
          <Button
            onClick={() => {
              window.history.back();
            }}
            style={{
              marginRight: 5,
            }}
          >
            이전 페이지
          </Button>,
          <a href="/">
            <Button>홈으로</Button>
          </a>,
        ]}
      />
    </div>
  );
}
