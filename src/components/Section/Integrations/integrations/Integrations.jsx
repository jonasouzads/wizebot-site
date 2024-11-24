"use client";
import { useEffect, useState } from "react";
import IntegrationsCard from "~/components/Ui/Cards/Integration";

const IntegrationSection = () => {
  const [platformDatas, setPlatformDatas] = useState([]);
  const platformData = async () => {
    const res = await fetch("/db/platformData.json");
    const platformData = await res.json();
    setPlatformDatas(platformData);
  };

  useEffect(() => {
    platformData();
  }, []);

  return (
    <div className="section wizebot-section-padding">
      <div className="container">
        <div className="row g-4">
          {platformDatas.map((platform, index) => (
            <IntegrationsCard key={index} {...platform} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationSection;
