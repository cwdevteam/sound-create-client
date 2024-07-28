"use client";

import ZoraTokenForm from "./ZoraTokenForm";
import StepCard from "./StepCard";

export default function ZoraCard() {
  return (
    <StepCard className="w-full p-6">
      <ZoraTokenForm />
    </StepCard>
  );
}
