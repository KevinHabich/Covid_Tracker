import React from "react";
import "./Table.css";
import numeral from "numeral";

function Table({ countries, getData }) {
  return (
    <tbody className="table">
      {countries.map((country, key) => (
        <tr
          key={key}
          onClick={async () => await getData(country.countryInfo.iso2)}
        >
          <td>{country.country}</td>
          <td>
            <strong>{numeral(country.cases).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default Table;
