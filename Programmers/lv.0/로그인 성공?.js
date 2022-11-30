// 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges

function solution(id_pw, db) {
  const [id, pw] = id_pw;
  const findId = db.filter((v) => v[0] === id).flat();
  return findId.length === 0 ? 'fail' : findId[1] === pw ? 'login' : 'wrong pw';
}

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
