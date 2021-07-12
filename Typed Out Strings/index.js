// Given an string return string result if '#' is a backspace on a keyboard
//'ab#df' , 'ac#df'-> 'adf'

// const typedOutString = (S, T) => {
//   let resultS = [];
//   let resultT = [];
//   for (let i = 0; i < S.length; i++) {
//     if (S[i] === "#") {
//       resultS.pop();
//     } else {
//       resultS.push(S[i]);
//     }
//   }
//   for (let i = 0; i < T.length; i++) {
//     if (T[i] === "#") {
//       resultT.pop();
//     } else {
//       resultT.push(T[i]);
//     }
//   }
//   if (resultS.length !== resultT.length) {
//     return false;
//   } else {
//     for (let i = 0; i < resultS.length; i++) {
//       if (resultS[i] !== resultT[i]) {
//         return false;
//       }
//     }
//   }
//   // if (resultS.join() === resultT.join()) {
//   //   return true;
//   // }
//   return true;
// };
const typedOutString = (S, T) => {
  let p1 = S.length - 1;
  let p2 = T.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (S[p1] === "#" || T[p2] === "#") {
      if (S[p1] === "#") {
        let backtrack = 2;
        while (backtrack > 0) {
          backtrack--;
          p1--;
          if (S[p1] === "#") {
            backtrack = backtrack + 2;
          }
        }
      }
      if (T[p2] === "#") {
        let backtrack = 2;
        while (backtrack > 0) {
          backtrack--;
          p2--;
          if (T[p2] === "#") {
            backtrack = backtrack + 2;
          }
        }
      }
    } else {
      if (S[p1] !== T[p2]) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }
  return true;
};
module.exports = typedOutString;
