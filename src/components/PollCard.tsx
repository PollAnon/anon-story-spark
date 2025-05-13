
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Heart, Share2, MessageCircle } from 'lucide-react';

interface PollOption {
  id: number;
  text: string;
  votes: number;
}

interface PollCardProps {
  id: string;
  question: string;
  options: PollOption[];
  totalVotes: number;
  createdAt: string;
}

export const PollCard = ({ id, question, options, totalVotes, createdAt }: PollCardProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleVote = (optionId: number) => {
    if (!hasVoted) {
      setSelectedOption(optionId);
      setHasVoted(true);
    }
  };

  const handleShare = () => {
    alert('Share functionality would be here');
    // In a real app, this would open sharing options
  };

  const calculatePercentage = (votes: number) => {
    if (totalVotes === 0) return 0;
    return Math.round((votes / totalVotes) * 100);
  };

  return (
    <div className="poll-card">
      <h3 className="text-xl font-bold mb-4">{question}</h3>
      
      <div className="space-y-3 mb-6">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleVote(option.id)}
            className={`w-full text-left rounded-xl p-4 transition-all relative overflow-hidden ${
              hasVoted
                ? selectedOption === option.id
                  ? 'bg-pollanon-pink text-white font-bold'
                  : 'bg-gray-100'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            disabled={hasVoted}
          >
            {hasVoted && (
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-pollanon opacity-20 z-0"
                style={{ width: `${calculatePercentage(option.votes)}%` }}
              />
            )}
            <div className="flex justify-between items-center relative z-10">
              <span>{option.text}</span>
              {hasVoted && (
                <span className="font-bold">{calculatePercentage(option.votes)}%</span>
              )}
            </div>
          </button>
        ))}
      </div>
      
      <div className="flex justify-between items-center text-gray-500 text-sm">
        <div className="flex space-x-4">
          <button 
            className={`flex items-center space-x-1 ${isLiked ? 'text-pollanon-pink' : ''}`}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart size={18} className={isLiked ? 'fill-pollanon-pink text-pollanon-pink' : ''} />
            <span>Like</span>
          </button>
          
          <button className="flex items-center space-x-1">
            <MessageCircle size={18} />
            <span>Comment</span>
          </button>
        </div>
        
        <button className="flex items-center space-x-1" onClick={handleShare}>
          <Share2 size={18} />
          <span>Share</span>
        </button>
      </div>
      
      <div className="mt-4 text-xs text-gray-400">
        {totalVotes} votes • {new Date(createdAt).toLocaleDateString()}
      </div>
    </div>
  );
};
