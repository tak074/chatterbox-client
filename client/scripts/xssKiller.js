var xssKiller = {

  escape: function (str) {
    if (typeof str !== 'string') {
      return JSON.stringify(str);
    }

    let newStr = '';

    for (let i = 0; i < str.length; i++) {
      let char = str[i];

      if (char === '&') {
        newStr += '&amp;';
      } else if (char === '<') {
        newStr += '&lt;';
      } else if (char === '>') {
        newStr += '&gt;';
      } else if (char === '"') {
        newStr += '&quot;';
      } else if (char === '\'') {
        newStr += '&apos;';
      } else {
        newStr += char;
      }
    }

    return newStr;
  }

};