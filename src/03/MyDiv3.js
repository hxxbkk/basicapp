// export default function MyDiv3(props) {
export default function MyDiv3({ d1, d2, d3 }) {
  return (
    <div className="flex flex-col p-5 m-10 w-3/4 h-3/4 bg-lime-500 text-white">
      {/* {`${props.d1} > ${props.d2} > ${props.d3}`} */}
      {`${d1} > ${d2} > ${d3}`}
      {/*MyDiv2에서 속성이름을 d1, d2, d3로 해서 그걸로 받아야함*/}
    </div>
  );
}
