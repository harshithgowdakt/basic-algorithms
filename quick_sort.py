def partition(arr, startIndex, stopIndex):
    pivot = arr[stopIndex]
    partitionIndex = startIndex

    for index in range(startIndex, stopIndex):
        if arr[index] <= pivot:
            arr[partitionIndex], arr[index] = arr[index], arr[partitionIndex]
            partitionIndex = partitionIndex+1

    arr[partitionIndex], arr[stopIndex] = arr[stopIndex], arr[partitionIndex]
    return partitionIndex


def quickSort(arr, startIndex, stopIndex):
    if startIndex < stopIndex:
        pivot = partition(arr, startIndex, stopIndex)
        quickSort(arr, startIndex, pivot-1)
        quickSort(arr, pivot+1, stopIndex)


test_arr = [10, 7, 8, 9, 1, 5]
quickSort(test_arr, 0, len(test_arr)-1)
print(test_arr)
