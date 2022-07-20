export class SelectionSort {
    static list: number[] = [1, 9, 4.5, 6.6, 5.7, -4.5];

    static selectionSort(list: number[]) {
        for (let i = 0; i < list.length -1; i++) {
            let currentMin = list[i];
            let indexMin = i;
            for (let j = i+1; j < list.length; j++) {
                if (currentMin > list[j]) {
                    currentMin = list[j];
                    indexMin = j;
                }
            }
            if (indexMin !=1) {
                list[indexMin] = list[i];
                list[i] = currentMin;
            }
        }

    }
}
SelectionSort.selectionSort(SelectionSort.list);
for (let i = 0; i < SelectionSort.list.length; i++)
    console.log(SelectionSort.list[i] + " ");