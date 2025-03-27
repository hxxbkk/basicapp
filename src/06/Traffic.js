import { useState, useEffect } from 'react';

function Traffic() {
  const [tdata, setTdata] = useState();

  const getFetchData = () => {
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?`;
    url = `${url}page=1&perPage=18&serviceKey=${process.env.REACT_APP_API_KEY}`;

    console.log(url);
  };

  //컴포넌트 생성시 fetch
  useEffect(() => {
    getFetchData();
  }, []);

  return <div>Traffic</div>;
}

export default Traffic;
