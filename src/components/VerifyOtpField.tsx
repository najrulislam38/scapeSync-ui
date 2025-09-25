"use client";

import { useId } from "react";
import { OTPInput, type SlotProps } from "input-otp";

import { cn } from "@/lib/utils";

interface VerifyOtpFieldProps {
  handleOnChangeOtp: (value: string) => void;
}

export default function VerifyOtpField({
  handleOnChangeOtp,
}: VerifyOtpFieldProps) {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <OTPInput
        id={id}
        containerClassName="flex items-center gap-3 has-disabled:opacity-50"
        maxLength={6}
        onChange={(value) => {
          handleOnChangeOtp(value);
        }}
        render={({ slots }) => (
          <div className="w-full flex gap-4 items-center justify-center ">
            {slots.map((slot, idx) => (
              <Slot key={idx} {...slot} />
            ))}
          </div>
        )}
      />
    </div>
  );
}

function Slot(props: SlotProps) {
  return (
    <div
      className={cn(
        "border-input bg-background text-foreground flex size-9 items-center justify-center rounded-md border font-medium shadow-xs transition-[color,box-shadow]",
        { "border-ring ring-ring/50 z-10 ring-[3px]": props.isActive }
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
    </div>
  );
}
