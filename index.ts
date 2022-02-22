
import fs from 'fs';

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
  let mixedUpNo = ((password[0] + 3) % 26);
  password[0] = mixedUpNo;
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

const readAndProcess = () => {
  const passwords: string[] = fs.readFileSync("./topthousand.txt").toString().split('\n');
  const encodedPasswords = [];
  for (let i=0; i<passwords.length; i++) {
    const encodedPassword = scrambler(passwords[i]);
    if (encodedPassword !== '\x00') {
      encodedPasswords.push({
        [encodedPassword]: passwords[i]
      })
    }
  }

  // console.log(encodedPasswords);

  const userData: string[] = fs.readFileSync("./userdata.txt").toString().split('\n');
  const formattedUserData = [];
  for (let j=0; j<userData.length; j++) {
    let splitUD = userData[j].split(',');
    formattedUserData.push({
      [splitUD[1]]: splitUD[0]
    })
  }
  // console.log(formattedUserData);

  let crackedPWS = [];

  for(let k=0; k<formattedUserData.length; k++) {
    let passwordToCheck = Object.keys(formattedUserData[k])[0];
    let name = formattedUserData[k][passwordToCheck];
    let match = encodedPasswords.filter((value) => {
      let scrambledPW = Object.keys(value)[0];
      if (scrambledPW === passwordToCheck) {
        return true
      }
    });
    if (match.length !== 0) {
      crackedPWS.push(`${name} you password is: ${match[0][passwordToCheck]}`);
    }
  }

  let textcrackedPWS = crackedPWS.join('\n');
  
  fs.writeFileSync("./passwords-cracked.txt", textcrackedPWS, "utf8");

}

readAndProcess();
