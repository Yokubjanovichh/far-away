import React from "react";
import style from "./style.module.scss";

export default function Adding({ select, setSelect, input, setInput, itemlist, setItemlist }) {
  const clickAdd = () => {
    if (select !== "" && input !== "") {
      const item = { number: select, text: input, packed: false, id: Date.now() };
      setItemlist([...itemlist, item]);

      // Input va Select ni tozalash
      setInput("");
      setSelect("");
    } else {
      alert("Please full the datas");
    }
    console.log(itemlist);
  };
  return (
    <div className={style.container}>
      <p>What do you need for your 😍trip?</p>
      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
      </select>
      <input type="text" placeholder="item..." value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={clickAdd}>Add</button>
    </div>
  );
}
