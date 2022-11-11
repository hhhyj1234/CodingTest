// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**머쓱이는 친구들과 369게임을 하고 있습니다.
 * 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신
 * 3, 6, 9의 개수만큼 박수를 치는 게임입니다.
 * 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머
 * 쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요. */

function solution(order) {
  let count = 0;
  [...order.toString()].forEach((v) => {
    if (v == 3 || v == 6 || v == 9) {
      count++;
    }
  });
  return count;
}

function solution(order) {
  const arr = [...order.toString()];
  return arr.filter((v) => v == 3 || v == 6 || v == 9); // ['3']
}

function solution(order) {
  const rule = ['3', '6', '9'];
  return [...order.toString()].filter((v) => rule.includes(v)).length;
}
