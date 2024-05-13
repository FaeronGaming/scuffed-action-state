/// <reference types="react/canary" />
import { useActionState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const mockDataFetch = () =>
  new Promise<string>((resolve) => {
    setTimeout(() => resolve("it worked"), 3000);
  });

function App() {
  const [response, submitAction, isPending] = useActionState(async () => {
    return await mockDataFetch();
  }, "Ready to test");

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={submitAction} disabled={isPending}>
          {isPending ? "Testing" : response}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
