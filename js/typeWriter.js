  // simple obsfucator to avoid my data being scraped on the internet
  // let's keep my website private for now
  var firstN = [86, 105, 110, 101, 115, 104, 32];
  var lastN = [82, 97, 109, 103, 105];
  var alpha = 'iY8lKr2knXvQSxIA0T43jN7g5oELMOezahd1sybCu6JmBfc9pqWVHtPRwGDZFU ';

  exec();
  async function exec() {
    await typeWriter(firstN, false);
    typeWriter(lastN, true);
  }

  async function typeWriter(txt, bold) {
    var i = 0;
    while (i < txt.length) {
      var j = 0;
      while (alpha.charAt(j) !== String.fromCharCode(txt[i])) {
        if (bold) {
          document.getElementById("name").innerHTML += alpha.charAt(j).bold();
        } else {
          document.getElementById("name").innerHTML += alpha.charAt(j);
        }
        j++;
        await sleep(5);
        if (bold) {
          document.getElementById("name").innerHTML = document.getElementById("name").innerHTML.slice(0, -8);
        } else {
          document.getElementById("name").innerHTML = document.getElementById("name").innerHTML.slice(0, -1);
        }
      }
      //console.log(String.fromCharCode(txt[i]));
      if (bold) {
        document.getElementById("name").innerHTML += String.fromCharCode(txt[i]).bold();
      } else {
        document.getElementById("name").innerHTML += String.fromCharCode(txt[i]);
      }
      i++;
      await sleep(25);
    }
  }


  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
