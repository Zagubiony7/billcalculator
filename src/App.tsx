import { useState } from "react";
import { Info } from "./components/global/Info";
import { MyButton } from "./components/global/MyButton";
import Bill from "./components/LeftSide/Bill";
import SelectTip from "./components/LeftSide/SelectTip";
import NumberOfPeople from "./components/LeftSide/NumberOfPeople";
import LeftSide from "./components/LeftSide/LeftSide";
import RightSide from "./components/RightSide/RightSide";

const App = () => {
  const [bill, setBill] = useState<string | number>("");
  const [customTip, setCustomTip] = useState<string | number>("");
  const [tip, setTip] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState<string | number>("");

  const handleBill = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBill(+e.target.value || "");
  };

  //* DEFAULT TIP
  const handleTip = (id: string) => {
    const newTip = parseInt(id);
    setTip((currTip) => (currTip !== newTip ? newTip : 0));
    setCustomTip("");
  };

  //* CUSTOM TIP
  const handleCustom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCustomTip = +e.target.value;
    setTip(0);
    return newCustomTip <= 100 ? setCustomTip(newCustomTip || "") : setCustomTip(100);
  };

  //* NUMBER OF PEOPLE
  const handleNumberOfPeople = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumberOfPeople = +e.target.value;
    return newNumberOfPeople <= 10 ? setNumberOfPeople(newNumberOfPeople || "") : setNumberOfPeople(10);
  };

  //* PERSON AMOUNT
  let personTip: string = "";
  if (bill && tip && numberOfPeople) {
    personTip = ((+bill * tip * 0.01) / +numberOfPeople).toFixed(2);
  } else if (bill && customTip && numberOfPeople) {
    personTip = ((+bill * +customTip * 0.01) / +numberOfPeople).toFixed(2);
  }
  let total;
  if (personTip) total = Number(+bill / +numberOfPeople + +personTip).toFixed(2);

  //* RESET BUTTON
  const handleReset = () => {
    if (personTip) {
      setBill("");
      setCustomTip("");
      setTip(0);
      setNumberOfPeople("");
    }
  };

  return (
    <main className="container">
      <LeftSide>
        <Bill value={bill} onChange={handleBill} />
        <SelectTip onHandleTip={handleTip} tip={tip} value={customTip} onChange={handleCustom} />
        <NumberOfPeople value={numberOfPeople} onChange={handleNumberOfPeople} />
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
