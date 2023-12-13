"use client";

//styles
import styles from "./BuySection.module.css";
import GradientBorder from "@/components/elements/GradientBorder";
import { BiSolidCopy } from "react-icons/bi";
import CopyToClipboard from "react-copy-to-clipboard";
import Toast from "@/components/elements/Toast";
import { useRef, useState } from "react";

function BuySection() {
  const id = "adfafe7c-9a4c-42e7-bf21-259b5222cc9b";
  const [value, setValue] = useState("Direct");
  const contentEl = useRef();

  return (
    <GradientBorder>
      <div className={styles.container}>
        <select>
          <option value="option1">Buy Coin</option>
          <option value="option2">Convert Coin To Balance</option>
        </select>
        <div className={styles.radio}>
          <input
            type="radio"
            id="customRadio1"
            name="customRadio"
            value="Direct"
            defaultChecked
            onChange={(e) => setValue(e.target.value)}
          />
          <label htmlFor="customRadio1">Direct</label>
          <input
            type="radio"
            id="customRadio2"
            name="customRadio"
            value="Balance"
            onChange={(e) => setValue(e.target.value)}
          />
          <label htmlFor="customRadio2">Balance</label>
        </div>
        <div className={styles.input}>
          <label>Number:</label>
          <input name="number" type="text" />
        </div>
        <div
          className={
            value === "Balance"
              ? ` ${styles.balance} ${styles.active}`
              : styles.balance
          }
          style={
            value === "Balance"
              ? { height: contentEl.current.scrollHeight }
              : { height: "0px" }
          }
          ref={contentEl}
        >
          <label>Trasnaction ID:</label>
          <input name="number" type="text" />
        </div>

        <CopyToClipboard text={id} onCopy={() => Toast("id copied", "info")}>
          <div className={styles.id}>
            <BiSolidCopy />
            {id}
          </div>
        </CopyToClipboard>
        <div className={styles.warning}>You just need to transfer Tether</div>
        <button>Buy</button>
      </div>
    </GradientBorder>
  );
}

export default BuySection;
