import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {

  return (
    <section className="App">
      <TwitterFollowCard UserName="Jsebas">
        Sebastian Bermudez
      </TwitterFollowCard>

      <TwitterFollowCard UserName="axel">
        Axel Rose
      </TwitterFollowCard>

      <TwitterFollowCard UserName="petra">
        Porce Crit
      </TwitterFollowCard>

      <TwitterFollowCard UserName="porqui">
        Purquisimo Chancho
      </TwitterFollowCard>
    </section>
  );
}
