import React, { useState } from "react";

import "./FilterList.scss";

export const FilterContext = React.createContext({});

const { Provider } = FilterContext;

const BTN_CLASS_NAME = "filter-list__btn";
const IS_SELECTED_SUFFIX = "--is-selected";

const generateBtnClassName = (itemValue, { filterValue }) => {
  let className = BTN_CLASS_NAME;

  const itemIsSelected = itemValue === filterValue;

  if (itemIsSelected) {
    className = `${className} ${className}${IS_SELECTED_SUFFIX}`;
  }

  return className;
};

export const FilterList = ({ children, initialValue, filterValues }) => {
  const [selectedItem, setSelectedItem] = useState({
    filterValue: initialValue,
  });

  const handleOnFilterChange = (evt) => {
    evt.stopPropagation();

    const {
      target: {
        dataset: { filterValue },
      },
    } = evt;

    setSelectedItem({ filterValue });
  };

  return (
    <>
      <ul onClick={handleOnFilterChange} className="filter-list">
        {Object.values(filterValues).map((value, index) => (
          <li key={index} className="filter-list__item">
            <button
              data-filter-value={`${value}`}
              className={generateBtnClassName(value, selectedItem)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
      <Provider value={selectedItem}>{children}</Provider>
    </>
  );
};
