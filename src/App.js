import { useRef, useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const inputRef = useRef();
  const buttonRef = useRef();

  // https://legacy.reactjs.org/docs/error-boundaries.html
  // компонента, яка повертає форму з 1 контрольованим і 1 неконтрольованим інпутом
  // return <form onsubmit="console.log()"></form>
  return (
    <>
      <form
        action="/user-details"
        onSubmit={(event) => {
          event.preventDefault();
          if (!username || !password || !inputRef.current.files.length) {
            return;
          }

          console.log({
            username,
            password,
            file: inputRef.current.files[0],
          });
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          name="username"
          value={username}
          onChange={(event) => {
            if (!isNaN(Number(event.target.value))) {
              setUsername(event.target.value);
            }
          }}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input type="file" ref={inputRef} />
        <button
          style={{ width: "75px" }}
          ref={buttonRef}
          onClick={() => {
            console.log(buttonRef.current);
          }}
        >
          Submit
        </button>
      </form>
      <div
        onContextMenu={(event) => {
          event.preventDefault();
          console.log("clicked with right button");
        }}
      >
        Click me with right button
      </div>
    </>
  );
}

export default App;
