# Margin

Espaços entre os elementos (Apenas elementos block)

- margin-top | margin-right | margin-bottom | margin-left
- values: `<length>` | `<percentage>` | auto

```css
div {
  /* Shorthand */
  margin: 12px 16px 10px 4px; /* top - right - bottom - left */
  margin: 12px 16px 0; /* top - right + left - bottom */
  margin: 8px 16px; /* top + bottom - right + left */
  margin: 8px; /* all  */
}
```

- Cuidado com o margin collapsing (o top ajusta-se ao bottom)
