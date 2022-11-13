// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다.
 * 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔
 * return 하도록 solution 함수를 완성해 주세요. */

function solution(numbers) {
  return +numbers
    .replace(/zero/g, 0)
    .replace(/one/g, 1)
    .replace(/two/g, 2)
    .replace(/three/g, 3)
    .replace(/four/g, 4)
    .replace(/five/g, 5)
    .replace(/six/g, 6)
    .replace(/seven/g, 7)
    .replace(/eight/g, 8)
    .replace(/nine/g, 9);
}

//replaceAll(pattern, replacement)
function solution(numbers) {
  const numStr = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  numStr.forEach((str, idx) => {
    numbers = numbers.replaceAll(str, idx);
  });
  return Number(numbers);
}
