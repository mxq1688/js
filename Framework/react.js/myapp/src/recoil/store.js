import { atom, selector } from "recoil";

const listState = atom({
  key: 'listState',
  default: []
})

const countState = selector({
  key: 'countState',
  get: ({get})=>{
    const list = get(listState)
    return list.filter((vo)=>{
        if(vo.finished) return true
    }).length
  }
})


// const inputValueState = atom({
//   key: "inputValueState",
//   default: ""
// });

// const filterdInputValue = selector({
//   key: "filterdInputValue",
//   get: ({ get }) => {
//     const inputValue = get(inputValueState);
//     return inputValue.replace(/[0-9]/gi, "");
//   }
// });
export { listState, countState };
