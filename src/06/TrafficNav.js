import TailButton from '../UI/TailButton';
export default function TrafficNav({ title, c, sel, setSel }) {
  //타이틀(대분류가 올 수도 중분류가 올 수도), 카테고리, 현재 선택된 항목, 선택된 항목이 바뀔 수 있도록

  const cTag = c.map((item) => (
    <TailButton
      key={item} //대분류는 중복되지 않으니까 item을 키로 줌
      caption={item}
      bcolor={sel === item ? 'orange' : 'blue'} //선택된거에 orange
      handleClick={() => handleClick(item)}
    />
  )); //대분류면 대분류, 중분류면 중분류가 넘어옴

  //버튼 클릭
  const handleClick = (item) => {
    setSel(item);
  };

  return (
    <div className="w-full flex justify-start items-center  my-5">
      <div className="w-1/5 flex justify-start items-center">
        교통사고 {title}
      </div>
      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {cTag}
      </div>
    </div>
  );
}
