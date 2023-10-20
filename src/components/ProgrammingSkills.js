import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Chart from "chart.js/auto";

const SkillsContainer = styled.div`
  padding: 10px 160px;
  max-width: 400px;
  margin: 0 auto;
  background-color: #050708;
  border-radius: 8px;

  @media (max-width: 462px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 450px) {
    display: none;
  }
`;

const SkillsTitle = styled.h2`
  color: white;
  text-align: center;
  width: 100%;
`;

const ProgrammingChart = styled.canvas`
  width: 80%;
  max-width: 300px;
  margin: 0 auto;
`;

const skillData = {
  labels: ["Java", "C#", "Python", "JavaScript", "C", "PHP"],
  data: [80, 85, 90, 70, 92, 65],
};

const ProgrammingSkills = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    let myChart = new Chart(ctx, {
      type: "doughnut", // Use 'doughnut' type for a pie chart
      data: {
        datasets: [
          {
            data: skillData.data,
            backgroundColor: [
              "#FF5733",
              "#FFA833",
              "#FFD333",
              "#33FF57",
              "#33D0FF",
              "#3348FF",
            ],
          },
        ],
        labels: skillData.labels,
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false, // Hide chart legend (labels)
          },
        },
      },
    });

    // Ensure chart is destroyed before unmounting the component
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div>
      <SkillsContainer>
        <SkillsTitle>Programming Languages</SkillsTitle>
        <ProgrammingChart ref={chartRef} />
      </SkillsContainer>
    </div>
  );
};

export default ProgrammingSkills;
