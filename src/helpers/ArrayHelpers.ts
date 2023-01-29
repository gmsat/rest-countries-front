
function sortArrayByKey(arr: any[], key: string, option: "ascending" | "descending") {
  let newArr = [...arr];
  newArr.sort((a, b) => {

    if (option === "ascending") {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }

      return 0;
    }

    else {
      if (a[key] > b[key]) {
        return -1;
      }
      if (a[key] < b[key]) {
        return 1;
      }

      return 0;
    }
  });

  return newArr;
}

function filterArrayByKeyValue(arr: any[], key: string, keyValue: any) {
  return arr.filter((obj) => obj[key] === keyValue);
}

function filterArrayByRange(arr: any[], key: string, range: number, option: "bigger" | "smaller") {
  let newArr = [...arr];

  if (option === "bigger") {
    newArr = arr.filter((obj) => obj[key] >= range);
  }

  if (option === "smaller") {
    newArr = arr.filter((obj) => obj[key] <= range);
  }

  return newArr;
}

function paginateArray(arr: any[], pageSize: number, pageNumber: number) {
  const endIndex = pageNumber * pageSize;
  const startIndex = endIndex - pageSize;

  return arr.slice(startIndex, endIndex);
}

function getTotalPagesNumber(arr: any[], pageSize: number) {
  return Math.ceil(arr.length / pageSize);
}


export {
  sortArrayByKey,
  filterArrayByRange,
  filterArrayByKeyValue,
  paginateArray,
  getTotalPagesNumber
}