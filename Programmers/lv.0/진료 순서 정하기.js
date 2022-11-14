// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다.
 * 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을
 * return하도록 solution 함수를 완성해주세요. */

// 두 배열의 value 값이 같으면 emergency의 value에 sortEmerg의 key(+1) 값을 주고싶음
// => findIndex + 1
function solution(emergency) {
  const sortEmerg = [...emergency].sort((a, b) => b - a);
  return emergency.map((v) => sortEmerg.findIndex((i) => i === v) + 1);
}

function solution(emergency) {
  const sortEmerg = emergency.sort((a, b) => b - a);
  // sort는 배열 자체를 변환하기 때문에 [...emerency]로 해서 정렬해야함.
  return emergency.map((v) => sortEmerg.findIndex((s) => s === v) + 1);
}
