import { store } from '../store'
import { WINNER_X, WINNER_O } from '../actions'

export const whoIsWinnerFn = (arr1, arr2, arr3) => {
	const compareArrBySlice = (start, end, arr1, arr2) =>
		String(arr1.slice(start, end).map((el) => el.value)) ===
		String(arr2.slice(start, end).map((el) => el.value))

	const compareArrByIndex = (a, b, c, arr1, arr2) =>
		String(arr1[a].value) + String(arr1[b].value) + String(arr1[c].value) ===
		String(arr2[a].value) + String(arr2[b].value) + String(arr2[c].value)

	if (
		compareArrBySlice(0, 3, arr1, arr2) ||
		compareArrBySlice(3, 6, arr1, arr2) ||
		compareArrBySlice(6, 9, arr1, arr2) ||
		compareArrByIndex(2, 4, 6, arr1, arr2) ||
		compareArrByIndex(0, 4, 8, arr1, arr2) ||
		compareArrByIndex(0, 3, 6, arr1, arr2) ||
		compareArrByIndex(1, 4, 7, arr1, arr2) ||
		compareArrByIndex(2, 5, 8, arr1, arr2)
	)
		return store.dispatch(WINNER_X)
	else if (
		compareArrBySlice(0, 3, arr1, arr3) ||
		compareArrBySlice(3, 6, arr1, arr3) ||
		compareArrBySlice(6, 9, arr1, arr3) ||
		compareArrByIndex(2, 4, 6, arr1, arr3) ||
		compareArrByIndex(0, 4, 8, arr1, arr3) ||
		compareArrByIndex(0, 3, 6, arr1, arr3) ||
		compareArrByIndex(1, 4, 7, arr1, arr3) ||
		compareArrByIndex(2, 5, 8, arr1, arr3)
	)
		return store.dispatch(WINNER_O)
	else {
		return
	}
}
