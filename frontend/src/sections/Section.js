import FieldRenderer from "../components/FieldRenderer";

export default function Section({ section, values, catalogs, onChange }) {
  return (
    <div style={{ marginBottom: 30 }}>
      <h3>{section.title}</h3>
      <div style={{ display: "flex", gap: 20 }}>
        {section.fields.map(field => (
          <FieldRenderer
            key={field.id}
            field={field}
            value={values[field.id] || ""}
            options={catalogs[field.source] || []}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
}
