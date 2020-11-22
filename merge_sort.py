def merge(array, leftArray, rightArray):
    leftArrayIndex = 0
    rightArrayIndex = 0
    sorted_index = 0

    while leftArrayIndex < len(leftArray) and rightArrayIndex < len(rightArray):
        if leftArray[leftArrayIndex] <= rightArray[rightArrayIndex]:
            array[sorted_index] = leftArray[leftArrayIndex]
            leftArrayIndex = leftArrayIndex + 1
        else:
            array[sorted_index] = rightArray[rightArrayIndex]
            rightArrayIndex = rightArrayIndex + 1

        sorted_index = sorted_index + 1

    while leftArrayIndex < len(leftArray):
        array[sorted_index] = leftArray[leftArrayIndex]
        leftArrayIndex = leftArrayIndex + 1
        sorted_index = sorted_index + 1

    while rightArrayIndex < len(rightArray):
        array[sorted_index] = rightArray[rightArrayIndex]
        rightArrayIndex = rightArrayIndex + 1
        sorted_index = sorted_index + 1


def mergeSort(array):
    if len(array) < 2:
        return

    startIndex = 0
    stopIndex = len(array) - 1
    middle = len(array)//2
    mergeSort(array[startIndex:middle])
    mergeSort(array[middle + 1:stopIndex])
    merge(array, array[startIndex:middle], array[middle + 1:stopIndex])


test_arr = [10, 7, 8, 9, 1, 5]
mergeSort(test_arr)
print(test_arr)
