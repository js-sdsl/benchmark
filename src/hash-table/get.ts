import { HashMap } from 'js-sdsl';
import Benchmark from 'benchmark';
import run from '../utils/run';
import {
  generateRandomNumber,
  generateRandomObject,
  generateRandomString
} from '../utils/generateRandom';

async function getTest(generateRandom: () => string | number, name = 'get') {
  const l = 1000;
  const arr: (string | number)[] = [];
  const map = new Map<string | number, number>();
  const obj: Record<string | number, number> = {};
  const hashMap = new HashMap<string | number, number>();
  for (let i = 0; i < l / 2; ++i) {
    arr.push(generateRandom());
  }
  for (let i = 0; i < l / 2; ++i) {
    map.set(arr[i], i);
    obj[arr[i]] = i;
    hashMap.setElement(arr[i], i);
  }
  const suite = new Benchmark.Suite();
  suite.add('js-sdsl', function () {
    for (let i = 0; i < l; ++i) {
      // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
      const a = hashMap.getElementByKey(arr[i]);
    }
  }).add('es6-map', function () {
    for (let i = 0; i < l; ++i) {
      // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
      const a = map.get(arr[i]);
    }
  }).add('object', function () {
    for (let i = 0; i < l; ++i) {
      // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
      const a = obj[arr[i]];
    }
  });
  return await new Promise<string>(resolve => run(suite, name, resolve));
}

export async function getNumberTest() {
  return await getTest(generateRandomNumber, 'get number');
}

export async function getStringTest() {
  return await getTest(generateRandomString, 'get string');
}

export async function getObjectTest() {
  const l = 1000;
  const arr: Record<string, string>[] = [];
  const map = new Map<Record<string, string>, number>();
  const hashMap = new HashMap<Record<string, string>, number>();
  for (let i = 0; i < l / 2; ++i) {
    arr.push(generateRandomObject());
  }
  for (let i = 0; i < l / 2; ++i) {
    arr.push(generateRandomObject());
    map.set(arr[i], i);
    hashMap.setElement(arr[i], i);
  }
  const suite = new Benchmark.Suite();
  suite.add('js-sdsl', function () {
    const hashMap = new HashMap<Record<string, string>, number>();
    for (let i = 0; i < l; ++i) {
      // eslint-disable-next-line no-unused-vars
      const a = hashMap.getElementByKey(arr[i]);
    }
  }).add('es6-map', function () {
    const map = new Map<Record<string, string>, number>();
    for (let i = 0; i < l; ++i) {
      // eslint-disable-next-line no-unused-vars
      const a = map.get(arr[i]);
    }
  });
  return await new Promise<string>(resolve => run(suite, 'get object', resolve));
}
