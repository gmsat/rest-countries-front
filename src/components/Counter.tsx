import React from 'react';
import countriesStore from "../CountriesStore";
import { observer } from "mobx-react-lite";

const Counter = () => {
  return (
    <div>
      Count: {countriesStore.counterTest}
      <button onClick={() => countriesStore.increaseCounter(1)}>Increase Count</button>
    </div>
  );
};

export default observer(Counter);