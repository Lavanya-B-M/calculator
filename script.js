let display = document.getElementById('display');
        let expression = '';

        function appendNumber(num) {
            expression += num;
            display.textContent = expression;
        }

        function appendOperator(op) {
            expression += op;
            display.textContent = expression;
        }

        function clearDisplay() {
            expression = '';
            display.textContent = '0';
        }

        function calculate() {
            try {
                expression = eval(expression).toString();
                display.textContent = expression;
            } catch {
                display.textContent = 'Error';
                expression = '';
            }
        }