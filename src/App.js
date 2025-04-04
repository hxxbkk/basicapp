//import logo from './logo.svg';
import './App.css';
import { IoHomeSharp } from 'react-icons/io5';
//import MyClock from './02/MyClock';
// import MyDiv1 from './03/MyDiv1';
//import MyList from './04/MyList';
//import Lotto from './05/Lotto';
//import Traffic from './06/Traffic';
//import MyRef from './07/MyRef';
// import MyRefAdd from './07/MyRefAdd';
import RouteMain from './09/RouteMain';
import Gallery from './08/Gallery';
function App() {
  return (
    <div className="flex flex-col w-full min-h-screen mx-auto">
      <header className="flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200">
        <p>리액트 기초</p>
        <p>
          <IoHomeSharp />
        </p>
      </header>
      <main className="grow w-full flex justify-center items-start overflow-y-auto">
        {/* <MyDiv1 /> */}
        {/* <MyList /> */}
        {/* <Lotto /> */}
        {/* <MyClock /> */}
        {/* <Traffic/> */}
        {/* <MyRef /> */}
        {/* <MyRefAdd /> */}
        {/* <Gallery /> */}
        <RouteMain />
      </main>
      {/*grow는 헤더와 푸터 남은 영역 잡는 거 */}
      <footer className="flex justify-center items-center h-20 bg-black text-slate-100">
        ⓒ Kim Hyo Bin
      </footer>
    </div>
  );
}

export default App;
