import Links from "./components/links";
import UserDetails from "./components/user";
import './App.css';

export default function App() {
  return (
    <>
      <div className="App">
        <div>
          <UserDetails />
        </div>
        <div>
          <Links/>
        </div>
      </div>
    </>
  )
};
