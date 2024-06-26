// Anagram이란 두 문자열이 알파벳의 나열 순서를 다르지만 그 구성이 일치하면 두 단어는 아 나그램이라고 합니다.
// 예를 들면 AbaAeCe 와 baeeACA 는 알파벳을 나열 순서는 다르지만 그 구성을 살펴보면 A(2), a(1), b(1), C(1), e(2)로 알파벳과 그 개수가 모두 일치합니다. 즉 어느 한 단어를 재 배열하면 상대편 단어가 될 수 있는 것을 아나그램이라 합니다.
// 길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세 요. 아나그램 판별시 대소문자가 구분됩니다.

//첫 줄에 첫 번째 단어가 입력되고, 두 번째 줄에 두 번째 단어가 입력됩니다. 단어의 길이는 100을 넘지 않습니다.

//두 단어가 아나그램이면 “YES"를 출력하고, 아니면 ”NO"를 출력합니다.

function solution(str_1, str_2){
    let answer  = "YES";
    const hashMap_1 =  hash(new Map(),str_1);
    const hashMap_2 = hash(new Map(), str_2);

    for (let [key, value] of hashMap_1) {
        if (!hashMap_2.has(key) || hashMap_2.get(key) !== value) {
            answer = "NO";
            break;
        }
    }

    return answer;
}

function hash (mapObj, str) {
    for(let i = 0; i<str.length; i++){
        if(!mapObj.has(str[i])) {
            mapObj.set(str[i], 1);
        }else {
            mapObj.set(str[i], mapObj.get(str[i])+1);
        }
    }
    return mapObj;
}
console.log(solution('AbaAeCe', 'baeeACA'))
console.log(solution('abaCC','Caaab'))