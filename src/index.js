import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");

const number = document.querySelector("span");
number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

//the only place we modify our data => REDUCER(currentState, action)
//action: REDUCER와 소통하는 방법!
const countModifier = (count = 0, action) => {
  //SWITCH 사용 권장
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
  //   if (action.type === "ADD") {
  //     return count + 1;
  //   } else if (action.type === "MINUS") {
  //     return count - 1;
  //   }
  //   return count;
};

const countStore = createStore(countModifier);

//SUBSCRIBE : store를 구독 - store 변화가 있을 때마다 감지
const onChange = () => {
  number.innerText = countStore.getState();
};
countStore.subscribe(onChange);

//DISPATCH : 리듀서를 불러서, current state + action that I sent
//action should be plain object! - must have type property
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};
const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));

// let count = 0;
// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   count = count + 1; //count++
//   updateText();
// };
// const handleMinus = () => {
//   count = count - 1;
//   updateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);
