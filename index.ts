
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

export const scrambler = (password: string) => {
  
  let crackedPW;
  crackedPW = mixUpFirstLetter(lettersToNumbers(capsOnly(password)));
  return crackedPW;

}