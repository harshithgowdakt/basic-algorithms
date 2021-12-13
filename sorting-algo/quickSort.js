function partition(arr, start, end) {
    let pivot = arr[end];
    let pivotIndex = start - 1;
    for (let i = start; i <= end; i++) {
        if (arr[i] < pivot) {
            let temp = arr[i];
            arr[i] = arr[pivotIndex];
            arr[pivotIndex] = temp;
            pivotIndex++;
        }
    }
    let temp = arr[end];
    arr[end] = arr[pivotIndex + 1];
    arr[pivotIndex + 1] = temp;
    return pivotIndex + 1;
}

function quickSort(arr, start, end) {
    if (start < end) {
        let partitionIndex = partition(arr, start, end);
        quickSort(arr, start, partitionIndex - 1);
        quickSort(arr, partitionIndex, end);
    }
}


let arr = [2, 4, 5, 60, 70, 7, 32, 36, 1, 8, 9];
quickSort(arr)

console.log(arr);
