import React, { useState } from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import * as Checkbox from "@radix-ui/react-checkbox";
import "../styles/Checkbox.css";

//Checkbox 컴퍼넌트는 HtmlInputElement가 아니라 button식으로 이루어져 있어서 다수 체크박스 적용시 이런식으로 작업할것
const checkboxes = [
  { id: "c1", label: "Accept terms and conditions." },
  { id: "c2", label: "I agree to receive promotional emails." },
  { id: "c3", label: "Subscribe to newsletter." },
];

const CheckboxDemo = () => {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const handleCheckboxClick = (id: string) => {
    console.log(checkedIds, "checkids");
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((checkedId) => checkedId !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };

  return (
    <form>
      {checkboxes.map(({ id, label }) => (
        <div key={id} style={{ display: "flex", alignItems: "center" }}>
          <Checkbox.Root
            className="CheckboxRoot"
            checked={checkedIds.includes(id)}
            onClick={() => handleCheckboxClick(id)}
            id={id}
          >
            <Checkbox.Indicator className="CheckboxIndicator">
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label className="Label" htmlFor={id}>
            {label}
          </label>
        </div>
      ))}
    </form>
  );
};

export default CheckboxDemo;
