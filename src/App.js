import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
        <Route exact path="/" element={<DayList />}/>
        <Route exact path="/day/:day" element={<Day />}/>
        <Route exact path="/create_word" element={<CreateWord />}/>
        <Route exact path="/create_day" element={<CreateDay />}/>
        <Route element={<EmptyPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;