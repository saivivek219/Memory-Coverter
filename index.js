const getConverter = () => {
  let value = document.getElementById("bytes-value").value;

  if (isNaN(value)) {
    //alert(value + "is not a valid data");
    let resultText = `${value} is not a valid data`;

    document.getElementById("answer").innerHTML = resultText;
    return;
  }

  let result = value / 10 ** 9;
  console.log(result);
  let resultText = `In GB, ${value} bytes is ${result} GB`;

  document.getElementById("answer").innerHTML = resultText;
};
