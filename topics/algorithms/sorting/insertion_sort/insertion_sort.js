const insertionSort = (list) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = i; j > 0; j--) {
      if (list[j] < list[j - 1]) {
        const temp = list[j - 1];
        list[j - 1] = list[j];
        list[j] = temp;
      } else {
        break;
      }
    }
  }
};

const list = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, -1];
insertionSort(list);

console.log(list);
