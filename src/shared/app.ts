import { add, subtract } from "./math";

const doAdd = (a: number, b: number) => add(a, b);
const doSubtract = (a: number, b: number) => subtract(a, b);

export { doAdd, doSubtract };
