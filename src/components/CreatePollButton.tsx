
import React from 'react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

interface CreatePollButtonProps {
  className?: string;
}

export const CreatePollButton = ({ className }: CreatePollButtonProps) => {
  return (
    <Link
      to="/create"
      className={cn(
        "fixed bottom-20 right-4 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-pollanon text-white shadow-glow z-20 animate-pulse-soft",
        className
      )}
    >
      <Plus className="w-7 h-7" />
    </Link>
  );
};
