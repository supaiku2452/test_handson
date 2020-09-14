const forEach = (items: unknown[], callback: (...args: unknown[]) => unknown) =>
  items.forEach((element) => {
    callback(element);
  });

const timer = (ms: number, callback: (...args: unknown[]) => unknown) => {
  setTimeout(() => callback(), ms);
};

export { forEach, timer };
