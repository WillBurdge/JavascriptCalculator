function insert(num) {
    document.getElementById('result').value += num;
  }

  function clearForm() {
    document.getElementById('result').value = "";
  }

  function calculate() {
    try {
      var result = eval(document.getElementById('result').value);
      document.getElementById('result').value = result;
    } catch(e) {
      alert("Error: " + e);
    }
  }