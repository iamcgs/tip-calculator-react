import React, { useState } from 'react';
import Dollar from '../images/icon-dollar.svg';
import Person from '../images/icon-person.svg';

function Calculator() {
  const [bill, setBill] = useState('');
  const [people, setPeople] = useState('');
  const [tip, setTip] = useState('');
  const [billPreventNegative, setBillPreventNegative] = useState(false);
  const [peoplePreventNegative, setPeoplePreventNegative] = useState(false);

  const billPerPerson = bill / people;
  const tipAmount = bill * (tip / 100);
  const tipPerPerson = tipAmount / people;
  const totalPerPerson = billPerPerson + tipPerPerson;

  const handleBillInput = (e) => {
    setBill(e.target.value);
    if (e.target.value < 0) {
      setBillPreventNegative(true);
      setBill('');
      setTimeout(() => {
        setBillPreventNegative(false);
      }, 3000);
    }
  };

  const handlePeoplelInput = (e) => {
    setPeople(e.target.value);
    if (e.target.value < 0) {
      setPeoplePreventNegative(true);
      setPeople('');
      setTimeout(() => {
        setPeoplePreventNegative(false);
      }, 3000);
    }
  };

  const handleReset = () => {
    setBill('');
    setPeople('');
    setTip('');
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
      <section className="flex flex-col items-start justify-between gap-8 py-4">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <span className="text-xs text-darkGrayishCyan sm:text-xl">
              Bill
            </span>
            {bill === '0' ? (
              <span className="mr-1 text-red-400">Can't be zero</span>
            ) : (
              <span></span>
            )}
            {billPreventNegative && (
              <span className="ml-1 text-xs text-red-400 sm:text-sm">
                Number must be positive.
              </span>
            )}
          </div>
          <div className="relative mt-2">
            <input
              className={bill === '0' ? 'input input-error' : 'input'}
              type="number"
              min="9"
              placeholder="0"
              value={bill}
              onChange={handleBillInput}
            />
            <img
              src={Dollar}
              className="absolute left-3 top-1/2 w-3 -translate-y-1/2"
              alt="/"
            />
          </div>
        </div>
        <div className="w-full">
          <span className="text-xs text-darkGrayishCyan sm:text-xl">
            Select Tip %
          </span>
          <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-3">
            <button
              onClick={() => setTip(5)}
              className={tip === 5 ? 'active tip-btn' : 'tip-btn'}
            >
              5%
            </button>
            <button
              onClick={() => setTip(10)}
              className={tip === 10 ? 'active tip-btn' : 'tip-btn'}
            >
              10%
            </button>
            <button
              onClick={() => setTip(15)}
              className={tip === 15 ? 'active tip-btn' : 'tip-btn'}
            >
              15%
            </button>
            <button
              onClick={() => setTip(25)}
              className={tip === 25 ? 'active tip-btn' : 'tip-btn'}
            >
              25%
            </button>
            <button
              onClick={() => setTip(50)}
              className={tip === 50 ? 'active tip-btn' : 'tip-btn'}
            >
              50%
            </button>
            <input
              className="rounded-md bg-veryLightGrayishCyan px-4 text-right text-2xl outline-darkGrayishCyan placeholder:text-center placeholder:text-darkGrayishCyan"
              type="number"
              placeholder="Custom"
              onChange={(e) => setTip(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between">
            <span className="text-xs text-darkGrayishCyan sm:text-xl">
              Number of People
            </span>
            {people === '0' ? (
              <span className="mr-1 text-red-400">Can't be zero</span>
            ) : (
              <span></span>
            )}
            {peoplePreventNegative && (
              <span className="ml-1 text-xs text-red-400 sm:text-sm">
                Number must be positive
              </span>
            )}
          </div>
          <div className="relative mt-2">
            <input
              className={people === '0' ? 'input input-error' : 'input'}
              type="number"
              placeholder="0"
              value={people}
              onChange={handlePeoplelInput}
            />
            <img
              src={Person}
              className="absolute left-3 top-1/2 w-3 -translate-y-1/2"
              alt="/"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-start justify-between gap-12 rounded-3xl bg-veryDarkCyan py-12 px-10 text-white">
        <div className="flex w-full flex-col gap-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg">Tip Amount</span>
              <br />
              <span className="text-grayishCyan">/ person</span>
            </div>
            <div>
              <span className="text-4xl text-strongCyan">
                $
                {isNaN(tipPerPerson) || tipPerPerson === Infinity
                  ? '0.00'
                  : `${tipPerPerson.toFixed(2)}`}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg">Total</span>
              <br />
              <span className="text-grayishCyan">/ person</span>
            </div>
            <div>
              <span className="text-4xl text-strongCyan">
                $
                {isNaN(totalPerPerson) || totalPerPerson === Infinity
                  ? '0.00'
                  : `${totalPerPerson.toFixed(2)}`}
              </span>
            </div>
          </div>
        </div>

        <button
          disabled={!bill && !people && !tip ? true : false}
          onClick={handleReset}
          className="w-full rounded-lg bg-strongCyan px-8 py-4 text-2xl font-bold uppercase tracking-wide text-veryDarkCyan transition-all duration-300 ease-in-out hover:bg-lightGrayishCyan lg:py-2"
        >
          Reset
        </button>
      </section>
    </div>
  );
}

export default Calculator;
