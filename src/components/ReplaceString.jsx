const replaceString = (string,replaced,replacer) => {
    if(!string) return;
    if(string.includes(replaced)) return string.replace(replaced,replacer);
    else return string;
}

export default replaceString;
