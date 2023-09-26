function getPromise<T>() {
  return new Promise<T>((resolve) => {
    resolve(['Text', 50] as unknown as T); 
  });
}

getPromise<[string, number]>()
  .then((data) => {
    console.log(data); 
  });
