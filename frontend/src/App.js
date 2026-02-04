import { useState } from "react";
import uiConfig from "../data/ui_config.json";
import countries from "../data/countries.json";
import currency from "../data/currency.json";
import offering from "../data/offering.json";

import Section from "./sections/Section";
import { totalServiceCost } from "./logic/formulas";

export default function App() {
  const [values, setValues] = useState({});

  const catalogs = { countries, currency, offering };

  function handleChange(fieldId, value) {
    setValues(prev => ({ ...prev, [fieldId]: value }));
  }

  const totalCost = totalServiceCost(values);

  return (
    <div style={{ padding: 20 }}>
      <h1>Lacost 40</h1>

      {uiConfig.sections.map(section => (
        <Section
          key={section.id}
          section={section}
          values={values}
          catalogs={catalogs}
          onChange={handleChange}
        />
      ))}

      <hr />
      <h2>Total Service Cost</h2>
      <div>{totalCost}</div>
    </div>
  );
}
