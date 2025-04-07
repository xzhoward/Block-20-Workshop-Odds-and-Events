const state = {
    numberBank: [],
    odds: [],
    evens: [],
  };
  
  const form = document.querySelector('form');
  const input = document.querySelector('#number');
  const numberBankOutput = document.querySelector('#numberBank output');
  const oddsOutput = document.querySelector('#odds output');
  const evensOutput = document.querySelector('#evens output');
  const sortOneButton = document.querySelector('#sortOne');
  const sortAllButton = document.querySelector('#sortAll');
  
  function render() {
    numberBankOutput.textContent = state.numberBank.join(', ');
    oddsOutput.textContent = state.odds.join(', ');
    evensOutput.textContent = state.evens.join(', ');
  }
  
  function isNumeric(value) {
    return !isNaN(value) && value.trim() !== '';
  }
  
  function sortNumber(number) {
    if (number % 2 === 0) {
      state.evens.push(number);
    } else {
      state.odds.push(number);
    }
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value;
  
    if (isNumeric(value)) {
      state.numberBank.push(Number(value));
      input.value = '';
      render();
    }
  });
  
  sortOneButton.addEventListener('click', () => {
    if (state.numberBank.length > 0) {
      const number = state.numberBank.shift();
      sortNumber(number);
      render();
    }
  });
  
  sortAllButton.addEventListener('click', () => {
    while (state.numberBank.length > 0) {
      const number = state.numberBank.shift();
      sortNumber(number);
    }
    render();
  });
   
  render();
  