//100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.(정렬을 사용하면 안됩니다).
function solution(a, b, c) {
  let answer = 0;
  if (a > b) {
    answer = b;
  } else {
    answer = a;
  }

  if (answer > c) {
    return c;
  } else {
    return answer;
  }
}

console.log(solution(2, 5, 1));
