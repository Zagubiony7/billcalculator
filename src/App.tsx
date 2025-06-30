import { useState } from "react";
import { MAX_BILL, MAX_TIP, MAX_PEOPLE } from "./data"; // 10000 100 10
import { Info } from "./components/global/Info";
import { MyButton } from "./components/global/MyButton";
import Bill from "./components/LeftSide/Bill";
import SelectTip from "./components/LeftSide/SelectTip";
import NumberOfPeople from "./components/LeftSide/NumberOfPeople";
import LeftSide from "./components/LeftSide/LeftSide";
import RightSide from "./components/RightSide/RightSide";

const App = () => {
  const [bill, setBill] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [tip, setTip] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);

  //@ UPDATE BILL
  const handleBill = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBill = +e.target.value;
    return newBill <= MAX_BILL ? setBill(newBill) : setBill(MAX_BILL);
  };

  //@ UPDATE TIP
  const handleTip = (id: string) => {
    const newTip = parseInt(id);
    setTip((currTip) => (currTip !== newTip ? newTip : 0));
    setCustomTip(0);
  };

  //@ UPDATE CUSTOM TIP
  const handleCustom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCustomTip = +e.target.value;
    setTip(0);
    return newCustomTip <= MAX_TIP ? setCustomTip(newCustomTip) : setCustomTip(MAX_TIP);
  };

  //@ UPDATE NUMBER OF PEOPLE
  const handleNumberOfPeople = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumberOfPeople = +e.target.value;
    return newNumberOfPeople <= MAX_PEOPLE ? setNumberOfPeople(newNumberOfPeople) : setNumberOfPeople(MAX_PEOPLE);
  };
  //@ CALCULATE AMOUNT FOR PEOPLES
  let personTip: string = "";
  if (bill && tip && numberOfPeople) {
    personTip = ((bill * tip * 0.01) / numberOfPeople).toFixed(2);
  } else if (bill && customTip && numberOfPeople) {
    personTip = ((bill * customTip * 0.01) / numberOfPeople).toFixed(2);
  }

  //@ CALCULATE TOTAL PRICE FOR PEOPLES
  let total;
  if (personTip) total = Number(bill / numberOfPeople + +personTip).toFixed(2);

  //@ RESET DATA
  const handleReset = () => {
    if (personTip) {
      setBill(0);
      setCustomTip(0);
      setTip(0);
      setNumberOfPeople(0);
    }
  };
  console.log(personTip);
  return (
    <main className="container">
      <LeftSide>
        <Bill bill={bill} value={bill || ""} onChange={handleBill} />
        <SelectTip tip={tip} onHandleTip={handleTip} value={customTip || ""} onChange={handleCustom} />
        <NumberOfPeople numPeople={numberOfPeople} value={numberOfPeople || ""} onChange={handleNumberOfPeople} />
      </LeftSide>

      <RightSide>
        <Info price={personTip || "0.00"}>Tip Amount</Info>
        <Info price={total || "0.00"}>Total</Info>
        <MyButton className={personTip ? "reset active" : "reset"} disabled={!personTip} onClick={handleReset}>
          RESET
        </MyButton>
      </RightSide>
    </main>
  );
};

export default App;
