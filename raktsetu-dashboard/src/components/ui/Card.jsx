// src/components/ui/Card.jsx
const Card = ({ children }) => (
  <div className="bg-white shadow rounded-lg">{children}</div>
);

const CardContent = ({ children }) => (
  <div className="p-4">{children}</div>
);

const CardHeader = ({ children }) => (
  <div className="p-4 border-b">{children}</div>
);

const CardTitle = ({ children }) => (
  <h2 className="text-xl font-bold">{children}</h2>
);

export { Card, CardContent, CardHeader, CardTitle };
