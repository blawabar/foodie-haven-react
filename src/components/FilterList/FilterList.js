import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import "./FilterList.scss";

export const FilterContext = React.createContext({});

const { Provider } = FilterContext;

const BTN_CLASS_NAME = "filter-list__btn";
const IS_SELECTED_SUFFIX = "--is-selected";

export const FilterList = ({ children, initialValue, filterValues }) => {
  const [selectedItem, setSelectedItem] = useState({
    filterValue: initialValue,
  });

  const generateBtnClassName = useCallback((itemValue, { filterValue }) => {
    let className = BTN_CLASS_NAME;

    const itemIsSelected = itemValue === filterValue;

    if (itemIsSelected) {
      className = `${className} ${className}${IS_SELECTED_SUFFIX}`;
    }

    return className;
  }, []);

  const handleOnFilterChange = useCallback((evt) => {
    evt.stopPropagation();

    const {
      target: {
        dataset: { filterValue },
      },
    } = evt;

    setSelectedItem({ filterValue });
  }, []);

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

FilterList.propTypes = {
  children: PropTypes.element.isRequired,
  initialValue: PropTypes.string.isRequired,
  filterValues: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};
