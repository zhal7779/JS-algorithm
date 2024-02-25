//선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다. 일렬로 서 있는 학생의 키가 앞에 서부터 순서대로 주어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그 램을 작성하세요. (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)


function solution (student){
    let answer = 1;
    let temp = student[0];
    
    for(let i = 1; i<student.length; i++){
        
        if(temp < student[i]){
            temp = student[i];
            answer++;
        }
    
    }
    
    return answer;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));