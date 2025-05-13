
import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PollCard } from '../components/PollCard';
import { CreatePollButton } from '../components/CreatePollButton';

const Inbox = () => {
  // This would come from your API in a real app
  const demoReplies = [
    {
      id: '1',
      question: 'Which movie should we watch this weekend?',
      options: [
        { id: 1, text: 'Barbie', votes: 8 },
        { id: 2, text: 'Oppenheimer', votes: 12 },
        { id: 3, text: 'Mission Impossible', votes: 5 },
      ],
      totalVotes: 25,
      createdAt: '2023-05-15T14:20:00Z',
    },
    {
      id: '2',
      question: 'Should I get bangs?',
      options: [
        { id: 1, text: 'Yes, do it!', votes: 14 },
        { id: 2, text: 'No, you'll regret it', votes: 36 },
      ],
      totalVotes: 50,
      createdAt: '2023-05-13T10:45:00Z',
    }
  ];

  return (
    <MainLayout>
      <div className="max-w-md mx-auto px-4 pt-6 pb-20">
        <div className="mb-6">
          <h1 className="text-2xl font-bold gradient-text">Your Inbox</h1>
          <p className="text-gray-600">See all the polls and responses</p>
        </div>
        
        <Tabs defaultValue="replies" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="replies" className="text-base">Replies</TabsTrigger>
            <TabsTrigger value="your-polls" className="text-base">Your Polls</TabsTrigger>
          </TabsList>
          
          <TabsContent value="replies" className="space-y-4">
            {demoReplies.length > 0 ? (
              demoReplies.map((poll) => (
                <PollCard key={poll.id} {...poll} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No replies yet</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="your-polls" className="space-y-4">
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">You haven't created any polls yet</p>
              <p className="text-sm text-gray-400">Create a poll to start getting anonymous responses</p>
            </div>
          </TabsContent>
        </Tabs>
        
        <CreatePollButton />
      </div>
    </MainLayout>
  );
};

export default Inbox;
