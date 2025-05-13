
import React, { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2, Share } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addOption = () => {
    if (options.length < 6) {
      setOptions([...options, '']);
    } else {
      toast({
        title: "Maximum options reached",
        description: "You can only add up to 6 options.",
        variant: "destructive",
      });
    }
  };

  const removeOption = (index: number) => {
    if (options.length <= 2) {
      toast({
        title: "Minimum options required",
        description: "You need at least 2 options.",
        variant: "destructive",
      });
      return;
    }
    
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim()) {
      toast({
        title: "Question required",
        description: "Please add a question for your poll.",
        variant: "destructive",
      });
      return;
    }
    
    const filledOptions = options.filter(opt => opt.trim() !== '');
    if (filledOptions.length < 2) {
      toast({
        title: "Not enough options",
        description: "Please add at least 2 options.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate creating a poll
    setTimeout(() => {
      toast({
        title: "Poll created!",
        description: "Your poll has been created and is ready to share.",
      });
      setIsSubmitting(false);
      navigate('/home');
    }, 1000);
  };

  const handleShare = () => {
    toast({
      title: "Share your poll",
      description: "This would open Instagram sharing in a real app.",
    });
  };

  return (
    <MainLayout>
      <div className="max-w-md mx-auto px-4 pt-6 pb-20">
        <div className="mb-6">
          <h1 className="text-2xl font-bold gradient-text">Create a Poll</h1>
          <p className="text-gray-600">Spill the tea and get honest answers</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Your Question</label>
            <Textarea 
              placeholder="Ask anything... the wilder the better 👀" 
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">Poll Options</label>
              <span className="text-xs text-gray-500">{options.length}/6 options</span>
            </div>
            
            {options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Input
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeOption(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            
            {options.length < 6 && (
              <Button
                type="button"
                variant="outline"
                className="w-full border-dashed"
                onClick={addOption}
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Option
              </Button>
            )}
          </div>
          
          <div className="pt-4 space-y-4">
            <Button
              type="submit"
              className="w-full bg-gradient-pollanon hover:opacity-90 text-white font-bold py-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating...' : 'Create Poll'}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              className="w-full border-[#FF3366] text-[#FF3366] py-3"
              onClick={handleShare}
            >
              <Share className="mr-2 h-4 w-4" />
              Share to Instagram
            </Button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default Create;
