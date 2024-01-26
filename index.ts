/**
 *  변수 선언
 *  01) 설명: 변수를 선언 시 타입지정 가능
 *  02) 문법: 변수명 :타입명
 *  03) 타입: string, number, boolean, bigint, null, undefined,[], {} 등
 */

// string
let firstName :string = 'Jake';

// array
let nameArr1 :string[] = ['Jake', 'Sanghoon'];
let nameArr2 :number[] = [1, 2];
let nameArr3 :boolean[] = [true, false];
let nameArr4 :bigint[] = [9007199254740991n];

// object
let ageObj1 :{ age :number } = { age : 1 };
let ageObj2 :{ name :string } = { name : 'Jake Park' };

// Union Type - CamelCase
type Member = [number, boolean];
let jake :Member = [123, true];

type Member2 = {
    name :string,
    age :number,
    height :string
};

let personObj :Member2 = {
    name : '박상훈',
    age : 22,
    height : '180cm'
};

type Member3 = {
    [key :string] : string
}

let personObj2 :Member3 = {
    name : '박상훈',
    nickname : '제이크'
}