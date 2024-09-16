import { Card, CardContent } from './ui/Card'; // Adjust path as needed

// Destructure `icon` as `Icon` and render it inside the component
const StatCard = ({ icon: Icon, label, value, change }) => {
  return (
    <Card>
      <CardContent className="flex items-center p-6">
        {/* Render Icon component */}
        <div className="rounded-full p-3 bg-blue-100 mr-4">
          {Icon && <Icon size={24} className="text-blue-500" />} {/* Ensure Icon is passed */}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">{label}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
          <p className={`text-xs ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
            {change}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
