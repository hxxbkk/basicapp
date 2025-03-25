import TailButton from '../UI/TailButton';
import Ball from './Ball';
import { useState } from 'react';

function Lotto() {
  const [tags, setTags] = useState(); //버튼 누를때마다 볼의 숫자가 바껴야 하기 때문에
  const handleOk = () => {
    let arr = [];

    while (arr.length < 7) {
      let n = Math.floor(Math.random() * 45) + 1;

      if (!arr.includes(n)) arr.push(n);
    }

    let bonus = arr.splice(-1); //한 개의 보너스 숫자 필요
    arr.sort((a, b) => a - b);
    console.log(arr, bonus);

    let tm = arr.concat(bonus); //보너스 숫자까지 합치기
    tm = tm.map((item) => <Ball n={item} key={`b${item}`} />);

    tm.splice(
      6,
      0,
      <span className="text-3xl mx-2" key="sp">
        +
      </span>
    ); // 6번째 위치에 + 기호 추가
    setTags(tm);
  };
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div className="m-10">{tags}</div>
      <div>
        <TailButton
          caption="로또번호생성"
          bcolor="blue"
          handleClick={handleOk}
        />
      </div>
    </div>
  );
}

export default Lotto;
