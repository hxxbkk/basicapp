import TailButton from '../UI/TailButton';
import { useState, useRef, useEffect } from 'react';

export default function MyRef() {
  const [sVal, setSVal] = useState(0);
  let cVal = 0;
  const rVal = useRef(0); //useRef로 관리하는 값은 값이 변해도 화면이 렌더링되지 않음 하지만 state 변수가 바뀌게 되면
  //화면이 다시 그려지는데 그때 useRef의 변경된 값이 반영됨
  //useRef를 이용해서 DOM 요소 선택 가능, .current 속성에 의해 값을 제어

  const handleC = () => {
    cVal = cVal + 1;
    console.log('컴포넌트변수:', cVal);
  };
  const handleS = () => {
    setSVal(sVal + 1);
  };
  const handleR = () => {
    //ref는 컴포넌트로 접근해야함
    rVal.current = rVal.current + 1;
    console.log('ref 변수:', rVal.current);
  };

  useEffect(() => {
    console.log('state 변수:', sVal);
  }, [sVal]);

  return (
    <div className="w-10/12 flex justify-center items-center">
      <div className="grid grid-cols-3 gap-4">
        <div className="text-blue-700 font-bold text-center text-xl">
          컴포넌트 변수 :{cVal}
        </div>
        <div className="text-orange-700 font-bold text-center text-xl">
          State변수 :{sVal}
        </div>
        <div className="text-lime-700 font-bold text-center text-xl">
          Ref 변수 :{rVal.current}
        </div>
        <div>
          <TailButton
            caption="컴포넌트 변수"
            bcolor="blue"
            handleClick={handleC}
          />
        </div>
        <div>
          <TailButton
            caption="State 변수"
            bcolor="orange"
            handleClick={handleS}
          />
        </div>
        <div>
          <TailButton caption="Ref 변수" bcolor="lime" handleClick={handleR} />
        </div>
      </div>
    </div>
  );
}
