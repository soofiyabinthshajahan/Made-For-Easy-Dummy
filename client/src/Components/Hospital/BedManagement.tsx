import React from 'react';
import { Bed, Users, AlertTriangle } from 'lucide-react';
import {
  BedContainer,
  BedSummary,
  BedStat,
  BedStatValue,
  BedStatLabel,
  BedChart,
  BedChartBar,
  BedChartLabel,
  ManageBedButton
} from '../Shared/DashboardStyledComponent';

interface BedManagementProps {
  totalBeds: number;
  availableBeds: number;
}

const BedManagement: React.FC<BedManagementProps> = ({ totalBeds, availableBeds }) => {
  const occupiedBeds = totalBeds - availableBeds;
  const occupancyRate = Math.round((occupiedBeds / totalBeds) * 100);

  return (
    <BedContainer>
      <BedSummary>
        <BedStat>
          <BedStatValue>{totalBeds}</BedStatValue>
          <BedStatLabel>Total Beds</BedStatLabel>
        </BedStat>
        <BedStat>
          <BedStatValue>{availableBeds}</BedStatValue>
          <BedStatLabel>Available</BedStatLabel>
        </BedStat>
        <BedStat>
          <BedStatValue>{occupiedBeds}</BedStatValue>
          <BedStatLabel>Occupied</BedStatLabel>
        </BedStat>
      </BedSummary>
      
      <BedChart>
        <BedChartBar>
          <div 
            style={{ 
              width: `${occupancyRate}%`, 
              backgroundColor: occupancyRate > 80 ? '#EF4444' : '#10B981',
              height: '8px',
              borderRadius: '4px',
              transition: 'all 0.3s ease'
            }}
          />
        </BedChartBar>
        <BedChartLabel>{occupancyRate}% Occupancy Rate</BedChartLabel>
      </BedChart>
      
      <ManageBedButton>
        <Bed size={16} />
        Manage Beds
      </ManageBedButton>
    </BedContainer>
  );
};

export default BedManagement;