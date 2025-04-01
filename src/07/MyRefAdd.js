import TailButton from '../UI/TailButton';
import { useRef, useEffect } from 'react';

export default function MyRefAdd() {
  const x1 = useRef(); //input에 있는 값을 가져오기 위해 사용
  const x2 = useRef();
  const x3 = useRef();
  const handleAdd = () => {
    if (!x1.current.value) {
      alert('첫번째 값을 입력하세요.');
      x1.current.focus();
      return;
    }
    if (!x2.current.value) {
      alert('두번째 값을 입력하세요.');
      x1.current.focus();
      return;
    }

    x3.current.value = parseInt(x1.current.value) + parseInt(x2.current.value);
  };

  const handleFocus = (x) => {
    //x를 받아주게 되면 x1이 될 수도 x2가 될 수도 있음
    x3.current.value = '';
    x.current.value = '';
  };

  useEffect(() => {
    x1.current.focus();
  }); //useEffect는 안에 있는 콜백함수를 defendency array에 따라 리액트가 자동으로 실행시킨다

  return (
    <div className="w-10/12 flex justify-center items-center">
      <div className="bg-slate-50 grid grid-cols-5 gap-2 m-5 p-5">
        <input
          type="number"
          id="txt1"
          ref={x1}
          onFocus={() => handleFocus(x1)}
          className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-center text-xl p-2.5"
        />
        <div className="flex justify-center items-center text-xl font-bold">
          +
        </div>
        <input
          type="number"
          id="txt2"
          ref={x2}
          onFocus={() => handleFocus(x2)}
          className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-center text-xl p-2.5"
        />
        <TailButton caption="=" bcolor="orange" handleClick={handleAdd} />
        <input
          type="number"
          id="txt3"
          ref={x3}
          className="bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-center text-xl p-2.5"
        />
      </div>
    </div>
  );
}
