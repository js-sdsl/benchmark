import { HashMap } from 'js-sdsl';
import Benchmark from 'benchmark';
import run from '../utils/run';
import {
  generateRandomNumber,
  generateRandomString
} from '../utils/generateRandom';

async function setTest(generateRandom: () => string | number, name = 'set') {
  const l = 1000;
  const arr: (string | number)[] = [];
  for (let i = 0; i < l; ++i) {
    arr.push(generateRandom());
  }
  const suite = new Benchmark.Suite();
  suite.add('js-sdsl', function () {
    const hashMap = new HashMap<string | number, number>();
    for (let i = 0; i < l; ++i) {
      hashMap.setElement(arr[i], i, false);
    }
  }).add('es6-map', function () {
    const map = new Map<string | number, number>();
    for (let i = 0; i < l; ++i) {
      map.set(arr[i], i);
    }
  }).add('object', function () {
    const obj: Record<string | number, number> = {};
    for (let i = 0; i < l; ++i) {
      obj[arr[i]] = i;
    }
  });
  return await new Promise<string>(resolve => run(suite, name, resolve));
}

export async function setNumberTest() {
  return await setTest(generateRandomNumber, 'set number');
}

export async function setStringTest() {
  return await setTest(generateRandomString, 'set string');
}

export async function setObjectTest() {
  const l = 1000;
  const suite = new Benchmark.Suite();
  suite.add('js-sdsl', function () {
    const hashMap = new HashMap<Record<string, string>, number>();
    for (let i = 0; i < l; ++i) {
      hashMap.setElement({}, i, true);
    }
  }).add('es6-map', function () {
    const map = new Map<Record<string, string>, number>();
    for (let i = 0; i < l; ++i) {
      map.set({}, i);
    }
  });
  return await new Promise<string>(resolve => run(suite, 'set object', resolve));
}
