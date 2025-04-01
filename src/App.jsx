import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {

  return (
    <section className="App">
      <TwitterFollowCard isFollowing UserName="Jsebas">
        Sebastian Bermudez
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing UserName="axel">
        Axel Rose
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing UserName="petra">
        Porce Crit
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing UserName="porqui">
        Purquisimo Chancho
      </TwitterFollowCard>
    </section>
  );
}
