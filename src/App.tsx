import { Header } from "./components/Header/Header";
import { Profile } from "./components/Profile/Profile";
import { Feed } from "./components/Feed/Feed";

import "./globals.css"
import { Comments } from "./components/Comments/Comments";

export function App() {

  return (
    <>
      <Header />
      <div className="flex justify-between py-8 px-28">
        <Profile />
          <Feed />
      </div>
    </>
  );
}
