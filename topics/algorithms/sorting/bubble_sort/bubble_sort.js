const bubbleSort = (data) => {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - 1; j++) {
      if (data[j] > data[j + 1]) {
        const temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
};

const data = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

bubbleSort(data);
console.log(data);
