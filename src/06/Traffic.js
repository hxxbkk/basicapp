import { useState, useEffect } from 'react';
import TrafficNav from './TrafficNav';

function Traffic() {
  //전체 fetch 데이터
  const [tdata, setTdata] = useState();

  //대분류 데이터
  const [c1, setC1] = useState();
  //선택된 대분류
  const [selC1, setSelC1] = useState();

  const getFetchData = () => {
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?`;
    url = `${url}page=1&perPage=18&serviceKey=${process.env.REACT_APP_API_KEY}`;

    console.log(url);

    fetch(url) //데이터가져오기
      .then((resp) => resp.json()) //json 형태로 바꾸기
      .then((data) => setTdata(data.data))
      .catch((err) => console.error(err));
  };

  //컴포넌트 생성시 fetch
  useEffect(() => {
    getFetchData();
  }, []);

  //tdata 변경되었을 때
  useEffect(() => {
    if (!tdata) return;

    //대분류 만들기
    let tm = tdata.map((item) => item['사고유형대분류']);
    tm = [...new Set(tm)];

    setC1(tm); //대분류 생성
  }, [tdata]);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      {c1 && <TrafficNav title="대분류" c={c1} sel={selC1} setSel={setSelC1} />}{' '}
      {/* c1에 값이 있어야 함 */}
    </div>
  );
}

export default Traffic;
