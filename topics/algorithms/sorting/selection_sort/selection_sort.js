const selectionSort = (data) => {
  for (let i = 0; i < data.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < data.length; j++) {
      if (data[j] < data[minIndex]) {
        minIndex = j;
      }
    }

    const temp = data[minIndex];
    data[minIndex] = data[i];
    data[i] = temp;
  }
};

const data = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, -1];

selectionSort(data);
console.log(data);
