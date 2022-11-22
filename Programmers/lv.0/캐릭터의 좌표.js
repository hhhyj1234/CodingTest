// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

/**머쓱이는 RPG게임을 하고 있습니다. 게임에는 up, down, left, right 방향키가 있으며
 * 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다. 예를 들어 [0,0]에서 up을 누른다면
 * 캐릭터의 좌표는 [0, 1], down을 누른다면 [0, -1], left를 누른다면 [-1, 0],
 * right를 누른다면 [1, 0]입니다. 머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이
 * 매개변수로 주어집니다. 캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표
 * [x, y]를 return하도록 solution 함수를 완성해주세요. */

function solution(keyinput, board) {
  let [x, y] = [0, 0];
  const [rx, ry] = board;
  keyinput.forEach((v) => {
    switch (v) {
      case 'left':
        Math.abs(x - 1) < rx / 2 ? (x -= 1) : x;
        break;
      case 'right':
        Math.abs(x + 1) < rx / 2 ? (x += 1) : x;
        break;
      case 'up':
        Math.abs(y + 1) < ry / 2 ? (y += 1) : y;
        break;
      case 'down':
        Math.abs(y - 1) < ry / 2 ? (y -= 1) : y;
        break;
    }
  });
  return [x, y];
}
/** 런타임
테스트 1 〉	통과 (0.08ms, 33.6MB)
테스트 2 〉	통과 (0.06ms, 33.4MB)
테스트 3 〉	통과 (0.09ms, 33.5MB)
테스트 4 〉	통과 (0.09ms, 33.6MB)
테스트 5 〉	통과 (0.08ms, 33.5MB)
테스트 6 〉	통과 (0.09ms, 33.5MB)
테스트 7 〉	통과 (0.18ms, 33.4MB)
테스트 8 〉	통과 (0.19ms, 33.4MB)
테스트 9 〉	통과 (0.28ms, 33.5MB)
테스트 10 〉	통과 (0.08ms, 33.4MB)
테스트 11 〉	통과 (0.09ms, 33.5MB) */

function solution(keyinput, board) {
  const result = [0, 0];
  keyinput.forEach((v) => {
    switch (v) {
      case 'down':
        result[1] -= 1;
        break;
      case 'up':
        result[1] += 1;
        break;
      case 'left':
        result[0] -= 1;
        break;
      case 'right':
        result[0] += 1;
        break;
    }
    result[0] =
      Math.abs(result[0]) < board[0] / 2
        ? result[0]
        : result[0] > 0
        ? +Math.trunc(board[0] / 2)
        : -Math.trunc(board[0] / 2);
    result[1] =
      Math.abs(result[1]) < board[1] / 2
        ? result[1]
        : result[1] > 0
        ? +Math.trunc(board[1] / 2)
        : -Math.trunc(board[1] / 2);
  });

  return result;
}
/** 런타임
테스트 1 〉	통과 (0.24ms, 33.6MB)
테스트 2 〉	통과 (0.06ms, 33.4MB)
테스트 3 〉	통과 (0.32ms, 33.5MB)
테스트 4 〉	통과 (0.13ms, 33.7MB)
테스트 5 〉	통과 (0.08ms, 33.5MB)
테스트 6 〉	통과 (0.08ms, 33.5MB)
테스트 7 〉	통과 (0.26ms, 33.6MB)
테스트 8 〉	통과 (0.20ms, 33.5MB)
테스트 9 〉	통과 (0.19ms, 33.4MB)
테스트 10 〉	통과 (0.11ms, 33.4MB)
테스트 11 〉	통과 (0.10ms, 33.5MB) */

// Fail
// 이동을 다 한 다음 범위 판별했음.
// 근데 [left, left, left, right] 이 경우 [0,0]이 나와야 함
// +-1 초과로 움직일 수 없기 때문에
// function solution(keyinput, board) {
//   const result = [0, 0];
//   keyinput.forEach((v) => {
//     switch (v) {
//       case 'down':
//         result[1] -= 1;
//         break;
//       case 'up':
//         result[1] += 1;
//         break;
//       case 'left':
//         result[0] -= 1;
//         break;
//       case 'right':
//         result[0] += 1;
//         break;
//     }
//   });
//   result[0] =
//     Math.abs(result[0]) < board[0] / 2
//       ? result[0]
//       : result[0] > 0
//       ? +Math.trunc(board[0] / 2)
//       : -Math.trunc(board[0] / 2);
//   result[1] =
//     Math.abs(result[1]) < board[1] / 2
//       ? result[1]
//       : result[1] > 0
//       ? +Math.trunc(board[1] / 2)
//       : -Math.trunc(board[1] / 2);
//   return result;
// }
