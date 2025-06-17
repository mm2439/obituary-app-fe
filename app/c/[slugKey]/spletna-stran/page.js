"use client";

import CompanyAccountLayout from "@/app/components/appcomponents/CompanyAccountLayout";
import React, { useState, useEffect } from "react";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Step4 from "./steps/step4";
import Step5 from "./steps/step5";
import Step6 from "./steps/step6";
import companyService from "@/services/company-service";

export default function SpletnaStran() {
  const [step, setStep] = useState(1);
  const [company, setCompany] = useState(null);
  const [user, setUser] = useState(null);
  const handleStepChange = (step) => {
    setStep(step);
    console.log(step);
  };
  const handleCompanyChange = (data) => {
    setCompany(data);
  };
  useEffect(() => {
    if (user) {
      getCompany();
    }
  }, [user]);
  useEffect(() => {
    const currUser = localStorage.getItem("user");
    if (currUser) {
      setUser(JSON.parse(currUser));
      console.log(JSON.parse(currUser));
    }
  }, []);
  const getCompany = async () => {
    try {
      const response = await companyService.getFloristCompany({ id: user.id });

      if (response.company === null) {
        return;
      }
      setCompany(response.company);
    } catch (error) {
      console.log(error);
    }
  };
  const steps = [
    {
      id: 1,
      title: "Izberi sliko",
      component: (
        <Step1
          data={company}
          onChange={handleCompanyChange}
          handleStepChange={handleStepChange}
        />
      ),
    },
    {
      id: 2,
      title: "Izberi sliko",
      component: (
        <Step2
          data={company}
          onChange={handleCompanyChange}
          handleStepChange={handleStepChange}
        />
      ),
    },
    {
      id: 3,
      title: "Izberi sliko",
      component: (
        <Step3
          data={company}
          onChange={handleCompanyChange}
          handleStepChange={handleStepChange}
        />
      ),
    },
    {
      id: 4,
      title: "Izberi sliko",
      component: (
        <Step4
          data={company}
          onChange={handleCompanyChange}
          handleStepChange={handleStepChange}
        />
      ),
    },
    {
      id: 5,
      title: "Izberi sliko",
      component: (
        <Step5
          data={company}
          onChange={handleCompanyChange}
          handleStepChange={handleStepChange}
        />
      ),
    },
    {
      id: 6,
      title: "Izberi sliko",
      component: (
        <Step6
          data={company}
          onChange={handleCompanyChange}
          handleStepChange={handleStepChange}
        />
      ),
    },
  ];

  return (
    <CompanyAccountLayout>
      <div className="w-full max-w-[975px]">
        <div className="grid grid-cols-[434px_488px] gap-x-[50px] w-[969px] mt-[52px] items-start">
          {steps[step - 1] && steps[step - 1].component}
        </div>
      </div>
    </CompanyAccountLayout>
  );
}
