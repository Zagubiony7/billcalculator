import { SPLIT_OPTIONS, type SelectTipProps } from "../../data";
import { MyButton } from "../global/MyButton";
const SelectTip = ({ tip, onHandleTip, ...props }: SelectTipProps) => {
  return (
    <>
      <p>Select Tip %</p>
      <menu>
        {SPLIT_OPTIONS.map((button) => (
          <MyButton
            key={button}
            className={parseInt(button) === tip ? "btn-select active" : "btn-select"}
            onClick={() => onHandleTip(button)}
          >
            {button}
          </MyButton>
        ))}
        <input type="number" placeholder="Custom" className="custom" min={0} max={100} {...props} />
      </menu>
    </>
  );
};

export default SelectTip;
