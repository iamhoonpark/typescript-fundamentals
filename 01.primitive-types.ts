/*

    변수의 타입 지정

*/

let lastName :string = 'Park';
let age :number = 50;
let maritalStatus :boolean = true;
let tbd1 :undefined = undefined;
let tbd2 :null = null;

let arrNum :number[] = [1, 2];
let arrStr :string[] = ['one', 'two'];

let obj :{ name1 :string, name2 :string } = { 
    name1 : 'Jake', 
    name2 : 'SangHoon' 
};

/*

    하지만, 
    변수 생성과 값의 할당 시 타입스크립트가 자동으로 타입을 부여하기 때문에
    모든 변수에 타입을 지정할 필요는 없다.

*/