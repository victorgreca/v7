'use client';

import React, { createContext, useContext, useState } from 'react';

interface HospitalContextType {
  hospitalName: string;
  prevalenceData: {
    percentile: number;
    rate: number;
  };
  losData: {
    percentile: number;
    rate: number;
  };
  readmissionData: {
    percentile: number;
    rate: number;
  };
  updateHospitalName: (name: string) => void;
  updatePrevalence: (percentile: number, rate: number) => void;
  updateLOS: (percentile: number, rate: number) => void;
  updateReadmission: (percentile: number, rate: number) => void;
}

const defaultContext: HospitalContextType = {
  hospitalName: 'Hospital A',
  prevalenceData: { percentile: 81, rate: 41 },
  losData: { percentile: 92, rate: 7.2 },
  readmissionData: { percentile: 88, rate: 32 },
  updateHospitalName: () => {},
  updatePrevalence: () => {},
  updateLOS: () => {},
  updateReadmission: () => {},
};

const HospitalContext = createContext<HospitalContextType>(defaultContext);

export function HospitalProvider({ children }: { children: React.ReactNode }) {
  const [hospitalName, setHospitalName] = useState(defaultContext.hospitalName);
  const [prevalenceData, setPrevalenceData] = useState(defaultContext.prevalenceData);
  const [losData, setLOSData] = useState(defaultContext.losData);
  const [readmissionData, setReadmissionData] = useState(defaultContext.readmissionData);

  const updateHospitalName = (name: string) => {
    setHospitalName(name);
  };

  const updatePrevalence = (percentile: number, rate: number) => {
    setPrevalenceData({ percentile, rate });
  };

  const updateLOS = (percentile: number, rate: number) => {
    setLOSData({ percentile, rate });
  };

  const updateReadmission = (percentile: number, rate: number) => {
    setReadmissionData({ percentile, rate });
  };

  return (
    <HospitalContext.Provider
      value={{
        hospitalName,
        prevalenceData,
        losData,
        readmissionData,
        updateHospitalName,
        updatePrevalence,
        updateLOS,
        updateReadmission,
      }}
    >
      {children}
    </HospitalContext.Provider>
  );
}

export function useHospitalContext() {
  const context = useContext(HospitalContext);
  if (!context) {
    throw new Error('useHospitalContext must be used within a HospitalProvider');
  }
  return context;
}