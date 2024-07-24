import React from "react";
import not_tick from "../assets/unchecked.png";
import tick from "../assets/checked.png";
import delete_icon from "../assets/delete.png";

export const Todoitems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div
      onClick={() => {
        toggle(id);
      }}
      className="flex items-center my-3 gap-2"
    >
      <div className="flex flex-1 items-center cursor-pointer gap-3">
        <img className="w-7" src={isComplete ? tick : not_tick} alt="" />
        <p
          className={`text-slate-700 text-[17px] decoration-slate-500 ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>

      <img
        onClick={() => {
          deleteTodo(id);
        }}
        className="w-6 cursor-pointer"
        src={delete_icon}
        alt=""
      />
    </div>
  );
};
