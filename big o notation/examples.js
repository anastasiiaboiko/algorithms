// ----------------------- 0(1)
const getLast = items =>
    items[items.length - 1]

getLast(['a', 'b', 'c', 'd']) // d (1 iteration)
getLast(['a', 'b', 'c', 'd', 'e', 'f', 'g']) // g(1 iteration)

// ----------------------- 0(n)

const findIndex = (items, match) => {
    for (let i = 0, total = items.length; i < total; i++) {
        if (items[i] == match) {
            return i
        }
        return -1
    }
}

const array = ['a', 'b', 'c', 'd']
findIndex(array, 'a') // 0  (1 iteration - best case)
findIndex(array, 'd') // 3  (4 iterations - worst case)
findIndex(array, 'e') // -1 (4 iterations - worst case)

// ----------------------- 0(n2)

const buildSquareMatrix = items => {
    let matrix = []
    for (let i = 0, total = items.length; i < total; i++) {
        matrix[i] = []
        for (let j = 0, total = items.length; j < total; j++) {
            matrix[i].push(items[j])
        }
    }
    return matrix;
}

buildSquareMatrix(['a', 'b', 'c'])
// 9 iterations for 3 elements, returns:
//[
//  ['a', 'b', 'c'],
//  ['a', 'b', 'c'],
//  ['a', 'b', 'c']
//]
//

// ----------------------- O(nlogn)

const quickSort = list => {
    if (list.length < 2) {
        return list

    }
    let pivot = list[0]
    let left = []
    let right = []
    for (let i = 1, total = list.length; i < total; i++) {
        if (list[i] < pivot) {
            left.push(list[i])
        } else {
            right.push(list[i])

        }
    }
    return [
        ...quickSort(left),
        pivot,
        ...quickSort(right)
    ]
}

quickSort(['q', 'a', 'z', 'w', 's', 'x', 'e', 'd', 'c', 'r'])
// ["a", "c", "d", "e", "q", "r", "s", "w", "x", "z"]