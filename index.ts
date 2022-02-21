
export const capsIt = (password: string): string => {
  let capsPwd = "";
  for (let i=0; i<password.length; i++) {
    if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
      capsPwd = capsPwd + password[i].toUpperCase();
    } else {
      capsPwd = capsPwd + password[i];
    }
  }
  return capsPwd;
}

export const scrambler = (password: string): string => {
  
  let crackedPW;
  crackedPW = capsIt(password);
  return crackedPW;

}