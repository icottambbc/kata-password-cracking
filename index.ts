
export const capsOnly = (password: string): string => {
  let capsPwd = "";
  for (let i=0; i<password.length; i++) {
    if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
      capsPwd = capsPwd + password[i].toUpperCase();
    } else if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
      capsPwd = capsPwd + password[i];
    }
  }
  return capsPwd;
}

export const lettersToNumbers = (password: string): number[] => {
  let numbers = [];
  for (let i=0; i<password.length; i++) {
    const letterAsNo = password.charCodeAt(i) - 65;
    numbers.push(letterAsNo);
  }
  return numbers
}

export const mixUpFirstLetter = (password: number[]) => {
  password[0] = ((password[0] + 15) % 26);
  return password
}

export const jumbleNumbers = (password: number[]) => {
  let jumbledNumbers = [password[0]];
  for (let i=1; i<password.length; i++) {
    jumbledNumbers.push((password[i] + jumbledNumbers[i -1]) % 26);
  }
  return jumbledNumbers;
}

export const numbersToLetters = (password: number[]): string => {
  let letters = "";
  for (let i=0; i<password.length; i++) {
    const noAsLetter = password[i] + 65;
    letters = letters + String.fromCharCode(noAsLetter);
  }
  return letters;
}

export const scrambler = (password: string) => {
  
  let crackedPW;
  crackedPW = numbersToLetters(jumbleNumbers(mixUpFirstLetter(lettersToNumbers(capsOnly(password)))));
  return crackedPW;

}