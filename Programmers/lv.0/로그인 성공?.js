// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
// 다른 사람 코드
function solution(id_pw, db) {
  let user = db.find(([u]) => u === id_pw[0]);

  if (user) {
    return user[1] === id_pw[1] ? 'login' : 'wrong pw';
  } else {
    return 'fail';
  }
}

function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const findId = db.filter((v) => v[0] === id).flat();
  return findId.length === 0 ? 'fail' : findId[1] === pw ? 'login' : 'wrong pw';
}
/** runtime
테스트 1 〉	통과 (0.09ms, 33.4MB)
테스트 2 〉	통과 (0.06ms, 33.4MB)
테스트 3 〉	통과 (0.05ms, 33.4MB)
테스트 4 〉	통과 (0.06ms, 33.5MB)
테스트 5 〉	통과 (0.08ms, 33.4MB)
테스트 6 〉	통과 (0.06ms, 33.4MB)
테스트 7 〉	통과 (0.09ms, 33.4MB)
테스트 8 〉	통과 (0.05ms, 33.5MB) */

// function solution(id_pw, db) {
//   const dbs = db.flat();
//   const [id, pw] = id_pw;
//   return dbs.includes(id)
//     ? dbs.indexOf(pw) === dbs.indexOf(id) + 1
//       ? 'login'
//       : 'wrong pw'
//     : 'fail';
// }

// id, pw는 각각 있지만 매치가 안 되면 wrong pw 떠야 함
// 배열끼리 비교하는 방법?
// function solution(id_pw, db) {
// let pws = [];
// db.forEach((v) => ids.push(v[0]));
// db.forEach((v) => pws.push(v[1]));
// const [id, pw] = id_pw;
// return ids.includes(id)
//   ? '아이디는같지만해당비번다른경우'
//     ? 'login'
//     : 'wrong pw'
//   : 'fail';
// }
