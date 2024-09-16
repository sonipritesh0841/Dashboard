// src/pages/BloodBankDashboard.jsx
import StatCard from '@/components/StatCard';
import Chart from '@/components/Chart';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Droplet, Users, Banknote, HeartPulse } from "lucide-react";

export default function BloodBankDashboard() {
  return (
    <DashboardLayout>
      <div className="container mx-auto px-6 py-8">
        <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={Droplet} label="Blood Donations" value="281" change="+55% than last week" />
          <StatCard icon={Users} label="Registered Donors" value="2,300" change="+3% than last month" />
          <StatCard icon={Banknote} label="Funds Raised" value="$34k" change="+1% than yesterday" />
          <StatCard icon={HeartPulse} label="Lives Saved" value="91" change="Just updated" />
        </div>

        <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
          <Chart title="Blood Donations" subtitle="Weekly donations" data={[40, 20, 10, 30, 50, 20, 40]} />
          <Chart title="Donor Registrations" subtitle="Monthly new donors" data={[100, 150, 200, 250]} />
          <Chart title="Blood Type Distribution" subtitle="Current inventory" data={{ 'A+': 30, 'B+': 25, 'O+': 35 }} />
        </div>
      </div>
    </DashboardLayout>
  );
}
