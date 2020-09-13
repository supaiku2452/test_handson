const forEach = (items: unknown[], callback: (...args: unknown[]) => unknown) =>
  items.forEach((element) => {
    callback(element);
  });

export { forEach };
