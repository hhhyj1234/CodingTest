// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/** 문자열 my_string과 정수 n이 매개변수로 주어질 때,
 * my_string에 들어있는 각 문자를 n만큼 반복한 문자열을
 * return 하도록 solution 함수를 완성해보세요. */

//str.repeat(count); ^^;;;;;;;;;;;;;;;;
function solution(my_string, n) {
  return [...my_string].map((v) => v.repeat(n)).join('');
}

function solution5(my_string, n) {
  const arr = new Array(my_string.length * n);
  [...my_string].forEach((v, idx) => {
    arr.fill(v, idx * n, (idx + 1) * n);
  });
  return arr.join('');
}

function solution4(my_string, n) {
  const arr = new Array(my_string.length * n);
  for (let i = 0; i < my_string.length; i++) {
    arr.fill(my_string[i], i * n, (i + 1) * n);
  }
  return arr.join('');
}

// function solution3(my_string, n) {
//   const arr = new Array(my_string.length * n);
//   for (let i = 0; i < my_string.length; i++) {
//     arr.fill(my_string[i], i * n, i * 2 * n);
//   }
//   return arr.join('');
// }
// eeellllllooo

//   const arr = new Array(my_string.length * n);
//   for (let i = 0; i < my_string; i++) {
//     for (let j = 0; j < arr.length; j += n) {
//       arr.fill(my_string[i], j, j + n);
//     }
//   }
//   return arr;
// }
// [ <15 empty items> ] WHY ? ? ?

// function solution2(my_string, n) {
//   const arr = new Array(my_string.length * n);
//   for (let i = 0; i < my_string.length; i++) {
//     for (let j = 0; j < arr.length; j += n) {
//       arr.fill(my_string[i], j, j + n);
//     }
//   }
//   return arr;
// }
// ['o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',]

// function solution1(my_string, n) {
//   const arr = new Array(my_string.length * n);
//   for (let i = 0; i < my_string.length; i++) {
//     arr.fill(my_string[i], i, i + n);
//   }
//   return arr;
// }
// [ 'h', 'e', 'l', 'l', 'o', 'o', 'o', <8 empty items> ]
