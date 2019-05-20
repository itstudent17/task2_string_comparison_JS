//Предпосылки:
//1) по условию аргумент пустая строка выдает значение true;
//2) непустая строка должна содержать хотя бы одну скобку любого типа,
//3) закрывающая скобка должна следовать непосредственно после закрывающей,
//а закрывающая - непосредственно после открывающей;
//по условию isCorrect('{(})[]') === false; хотя для каждой открывающей скобки
// есть своя закрывающая,
//4) проверка соседства с закрывающей скобкой должна проводиться как слева направо,
//так и справа налево.


const isCorrect = string => {

	if (string === "") {
		console.log(true); //проверка предпосылки 1)
		return;
	}

	else if (string.indexOf("[") === -1 && string.indexOf("{") === -1 && string.indexOf("(") &&
  		string.indexOf("]") === -1 && string.indexOf("}") === -1 && string.indexOf(")")) {
		//проверка предпосылки 2)
    	alert("Ваша строка не содержит скобок.\nВведите другую строку со скобками любого типа.");
    	return;
  	}

  	else {
    var countOfMistakes = 0; // счетчик ошибок (незакрытых скобок любого типа)

    //проверка предпосылок 3) и 4) в одном направлении
    for (var i = 0; i < string.length; i++) {
      if (string[i] === "[" && string[i + 1] !== "]") {
        countOfMistakes++;
      }
      if (string[i] === "{" && string[i + 1] !== "}") {
        countOfMistakes++;
      }
      if (string[i] === "(" && string[i + 1] !== ")") {
        countOfMistakes++;
      }
    }

    //проверка предпосылок 3) и 4) в другом направлении
	for (var k = string.length - 1 ; k >= 0; k--) {
	  if (string[k] === "]" && string[k - 1] !== "[") {
	    countOfMistakes++;
	  }
	  if (string[k] === "}" && string[k - 1] !== "{") {
	    countOfMistakes++;
	  }
	  if (string[k] === ")" && string[k - 1] !== "(") {
	    countOfMistakes++;
	  }
	}

	//вывод результата в зависимости от значения счетчика
    if (countOfMistakes !== 0) {
      console.log(false);
    }
    else if (countOfMistakes === 0) {
      console.log(true);
    }
  }
}


isCorrect('')// === true;
isCorrect('()')// === true;
isCorrect('{(})[]')// === false;

isCorrect("()[]{}");//true
isCorrect("]])");//false
isCorrect("[]}");//false
isCorrect("}{");//false



