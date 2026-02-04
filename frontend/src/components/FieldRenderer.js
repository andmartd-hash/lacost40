export default function FieldRenderer({ field, value, options, onChange }) {
  return (
    <div style={{ width: field.width }}>
      <label>{field.label}</label>

      {field.type === "select" && (
        <select value={value} onChange={e => onChange(field.id, e.target.value)}>
          <option value="">-- Select --</option>
          {options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      )}

      {field.type === "number" && (
        <input
          type="number"
          value={value}
          onChange={e => onChange(field.id, Number(e.target.value))}
        />
      )}
    </div>
  );
}
