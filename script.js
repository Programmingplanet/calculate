const display = document.getElementById('show-box');
    let expression = '';
    let history = [];

    function updateDisplay(value) {
      display.textContent = value || '0';
    }

    function handleInput(value) {
      if (value === 'C') {
        expression = '';
      } else if (value === '=') {
        try {
          const result = evaluateExpression(expression);
          history.push(`${expression} = ${result}`);
          expression = result;
        } catch (e) {
          expression = 'Error';
        }
      } else if (value === 'backspace') {
        expression = expression.slice(0, -1);
      } else if (value === 'sqrt') {
        expression += 'Math.sqrt(';
      } else if (value === 'log') {
        expression += 'Math.log10(';
      } else if (value === 'sin') {
        expression += 'Math.sin(';
      } else if (value === 'cos') {
        expression += 'Math.cos(';
      } else if (value === 'tan') {
        expression += 'Math.tan(';
      } else if (value === 'History') {
        alert(history.join('\n'));
      } else {
        expression += value;
      }
      updateDisplay(expression);
    }

    function evaluateExpression(expr) {
      return eval(expr.replace(/×/g, '*').replace(/÷/g, '/').replace(/√/g, 'Math.sqrt').replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan').replace(/log/g, 'Math.log10'));
    }

    document.querySelectorAll('.button input[type="button"]').forEach(button => {
      button.addEventListener('click', (e) => {
        handleInput(e.target.value);
      });
    });