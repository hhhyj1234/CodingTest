// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다.
 * 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을
 * return하도록 solution 함수를 완성해주세요. */

// slice(n) : n부터 잘라서 리턴
// slice(a, b) : a부터 b까지(not include) 잘라서 리턴
function solution3(numbers, direction) {
  return direction === 'right'
    ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)]
    : [...numbers.slice(1), numbers[0]];
}

// unshift는 생각났는데(일단 맨 앞에 추가해야하니까 unshift)
// 팝? 푸쉬? 쉬프트? 생각 못했다.. 반성합니다.
function solution2(numbers, direction) {
  direction === 'right'
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift());
  return numbers;
}

function solution(numbers, direction) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (direction === 'right') {
      result[i] = numbers[i - 1];
      result[0] = numbers[numbers.length - 1];
    } else {
      result[i] = numbers[i + 1];
      result[numbers.length - 1] = numbers[0];
    }
  }
  return result;
}
