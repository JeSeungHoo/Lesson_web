// alert(`js 파일 적용 확인!!!`);

// 점수를 등록할 배열에 점수를 입력받아 등록
function inputScore(arrays, size, subject){
    for(let i = 0; i < size; i++){
        // let score = prompt(subject + " 과목의 점수를 입력해주세요!");
        // score = parseInt(score);
        // arrays[i] = score; // arrays.push(score);
        arrays[i] = parseInt( prompt(subject + " 과목의 점수를 입력해주세요!") );
    }
    // 점수 등록 완료된 배열 반환
    return arrays;
}
// 선생님이 만든 max
function maxScore(arrays){
    let max = arrays[0];
    for(let score of arrays){
        if(score > max){
            max = score;
        }
    }
    return max;
}
// 내가 만들어 본 max
// function maxScore(arrays, size){
//     for(let i = 0; i < size; i++){
//         for(let j = i+1, temp; j < size; j++){
//             if(arrays[i] < arrays[j]){
//                 temp = arrays[i];
//                 arrays[i] = arrays[j];
//                 arrays[j] = temp;
//             }
//         }
//     }
//     return arrays[0];
// }

// 선생님이 만든 min
function minScore(arrays){
    let min = arrays[0];
    for(let index in arrays){
        if(arrays[index] < min){
            min = arrays[index];
        }
    }
    return min;
}

// 합계
function totalValue(arrays){
    let sum = 0;
    for(let i = 0; i < arrays.length; i++){
        sum += arrays[i];
    }
    return sum;
}

// 평균
function average(total, size){
    return total / size;
}