// 현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니다. 
// 멘토링은 멘토(도와주는 학생)와 멘티(도움을 받는 학생)가 한 짝이 되어 멘토가 멘티의 수학공부를 도와주는 것입니다.
// 선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.
// 만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.
// M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지 출력하는 프로그램을 작성하세요.


function solution(arr){
    let answer = 0;
    const totalTestCount = arr.length;
    const mentoring = {};

    for(let i = 0; i< totalTestCount; i++){
        for(let j = 0; j< arr[i].length; j++){
            for(let k = j+1; k<arr[i].length; k++){
                const mentor  = `${arr[i][j]}, ${arr[i][k]}`
                if(i === 0) {
                    mentoring[mentor] = 1;
                } else{
                    if(Object.keys(mentoring).includes(mentor)){
                        mentoring[mentor]++;
                    }
                }
            }
        }
    }

    for(let i in mentoring){
        if(mentoring[i] === totalTestCount){
            answer++;
        }
    }

    return answer;
    
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));