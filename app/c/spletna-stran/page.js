"use client";

import CompanyAccountLayout from "../../components/appcomponents/CompanyAccountLayout";
import React, { useState } from "react";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Step4 from "./steps/step4";
import Step5 from "./steps/step5";
import Step6 from "./steps/step6";

export default function SpletnaStran() {
  const [step, setStep] = useState(1);

  const handleStepChange = (step) => {
    setStep(step);
    console.log(step);
  }

  const steps = [
    {
      id: 1,
      title: "Izberi sliko",
      component: <Step1 handleStepChange={handleStepChange} />
    },
    {
      id: 2,
      title: "Izberi sliko",
      component: <Step2 handleStepChange={handleStepChange} />
    },
    {
      id: 3,
      title: "Izberi sliko",
      component: <Step3 handleStepChange={handleStepChange} />
    },
    {
      id: 4,
      title: "Izberi sliko",
      component: <Step4 handleStepChange={handleStepChange} />
    },
    {
      id: 5,
      title: "Izberi sliko",
      component: <Step5 handleStepChange={handleStepChange} />
    },
    {
      id: 6,
      title: "Izberi sliko",
      component: <Step6 handleStepChange={handleStepChange} />
    }
  ]

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