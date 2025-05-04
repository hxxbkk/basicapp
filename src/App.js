//import logo from './logo.svg';
import './App.css';
//import { IoHomeSharp } from 'react-icons/io5';
import MyClock from './02/MyClock';
// import MyDiv1 from './03/MyDiv1';
//import MyList from './04/MyList';
import Lotto from './05/Lotto';
import Traffic from './06/Traffic';
//import MyRef from './07/MyRef';
import MyRefAdd from './07/MyRefAdd';
//import RouteMain from './09/RouteMain';
import Gallery from './08/Gallery';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import { FaHome } from 'react-icons/fa';
import RecoilMain from './10/RecoilMain';
import Rest from './12/Rest';

function App() {
  return (
    <BrowserRouter>
      {' '}
      <div className="flex flex-col w-full min-h-screen mx-auto">
        <header className="flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200">
          <p>리액트 기초</p>
          <ul className="flex justify-center items-center text-sm">
            <li className="mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600">
              <Link to="/">시계</Link>
            </li>
            <li className="mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600">
              <Link to="/lotto">로또</Link>
            </li>
            <li className="mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600">
              <Link to="/traffic">교통사고</Link>
            </li>
            <li className="mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600">
              <Link to="/add">더하기</Link>
            </li>
            <li className="mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600">
              <Link to="/gallery">관광</Link>
            </li>
            <li className="mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600">
              <Link to="/recoil">Recoil예제</Link>
            </li>
            <li className="mx-2 p-2 rounded-md hover:bg-white hover:text-blue-600">
              <Link to="/rest">JSON CRUD예제</Link>
            </li>
          </ul>

          {/* <Link to="/">
            <FaHome />
          </Link> */}
          <Link to="/">🏠</Link>
        </header>
        <main className="grow w-full flex justify-center items-start overflow-y-auto">
          <Routes>
            <Route path="/" element={<MyClock />} />
            <Route path="/lotto" element={<Lotto />} />
            <Route path="/traffic" element={<Traffic />} />
            <Route path="/add" element={<MyRefAdd />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/recoil" element={<RecoilMain />} />
            <Route path="/rest" element={<Rest />} />
          </Routes>
        </main>
        {/*grow는 헤더와 푸터 남은 영역 잡는 거 */}
        <footer className="flex justify-center items-center h-20 bg-black text-slate-100">
          ⓒ Kim Hyo Bin
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
