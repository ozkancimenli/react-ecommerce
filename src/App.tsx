import { Outlet, Link } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <footer style={{padding:16, borderTop:"1px solid #eee", marginTop:24}}>
        <Link to="https://vercel.com" target="_blank" rel="noreferrer">Deployed on Vercel</Link>
      </footer>
    </div>
  );
}
