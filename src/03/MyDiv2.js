import MyDiv3 from './MyDiv3';
// export default function MyDiv2(props) {

// 구조분해할당 이용하기
export default function MyDiv2({ dn1, dn2, dn3 }) {
  return (
    <div className="flex flex-col p-5 m-10 w-3/4 h-3/4 justify-center items-center bg-lime-700 text-white">
      <div className="w-full flex justify-start">
        {/*{`${props.dn1} > ${props.dn2}`}*/}
        {`${dn1} > ${dn2}`}
      </div>
      {/*속성 이름으로 줘야함 dn1,dn2 */}
      {/* <MyDiv3 d1={props.dn1} d2={props.dn2} d3={props.dn3} /> */}
      <MyDiv3 d1={dn1} d2={dn2} d3={dn3} />
    </div>
  );
}
