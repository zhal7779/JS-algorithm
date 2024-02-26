// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
// 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력하는 프로그램을 작성하세요.
// 단 회문을 검사할 때 대소문자를 구분하지 않습니다.

function solution(str) {
  let answer = "YES";
  str = str.toLowerCase();
  let len = str.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] != str[len - i - 1]) return "NO";
  }
  return answer;
}

console.log(solution("gooG"));
