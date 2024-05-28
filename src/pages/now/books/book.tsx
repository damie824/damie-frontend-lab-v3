export default function NowBook(props: {
  title: string;
  thumbnail: string;
  contents: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        margin: "20px 20px",
        marginBottom: "40px",
      }}
    >
      <img
        src={props.thumbnail}
        style={{
          width: "150px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px",
          marginRight: "30px",
        }}
      />
      <div>
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          {props.title}
        </h3>
        <p
          style={{
            marginTop: "0px",
            wordBreak: "keep-all",
            lineHeight: "1.6",
          }}
        >
          {props.contents}
        </p>
      </div>
    </div>
  );
}
