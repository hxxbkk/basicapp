import { useState } from 'react';

function MyListItem({ title, imgUrl, content }) {
  //let cnt = 0;
  const [cnt, setCnt] = useState(0);
  const handleClick = () => {
    //cnt = cnt + 1;
    setCnt(cnt + 1);
    console.log('cnt=', cnt);
  };
  return (
    <div className="flex w-full h-full justify-center items-start p-2 border border-slate-400">
      <div className="flex w-1/3 m-2 ">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="flex flex-col justify-between p-2 m-2 w-2/3 h-full">
        <div>
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
        <p>{content}</p>
        <div className="flex justify-end items-center">
          <span onClick={handleClick} className="cursor-pointer">
            ❤️
          </span>
          <span className="inline-flex mx-2 font-bold">좋아요</span>
          <span className="font-bold text-xl">{cnt}</span>
        </div>
      </div>
    </div>
  );
}

export default MyListItem;
