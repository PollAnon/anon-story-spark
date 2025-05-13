
import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { PollCard } from '../components/PollCard';
import { CreatePollButton } from '../components/CreatePollButton';

const Home = () => {
  // This would come from your API in a real app
  const demoPolls = [
    {
      id: '1',
      question: 'What should I wear to the party? 👗',
      options: [
        { id: 1, text: 'Black dress', votes: 15 },
        { id: 2, text: 'Red jumpsuit', votes: 7 },
        { id: 3, text: 'Jeans and cute top', votes: 22 },
      ],
      totalVotes: 44,
      createdAt: '2023-05-12T15:30:00Z',
    },
    {
      id: '2',
      question: 'Should I text them back? 📱',
      options: [
        { id: 1, text: 'Yes, right now!', votes: 32 },
        { id: 2, text: 'Wait a bit longer', votes: 18 },
        { id: 3, text: 'Nope, ghost them', votes: 12 },
      ],
      totalVotes: 62,
      createdAt: '2023-05-11T09:15:00Z',
    },
    {
      id: '3',
      question: 'Rate my new profile pic? 📸',
      options: [
        { id: 1, text: 'Love it! 🔥', votes: 45 },
        { id: 2, text: 'It\'s okay', votes: 12 },
        { id: 3, text: 'Take a new one', votes: 8 },
      ],
      totalVotes: 65,
      createdAt: '2023-05-10T18:45:00Z',
    },
  ];

  return (
    <MainLayout>
      <div className="max-w-md mx-auto px-4 pt-6 pb-20">
        <div className="mb-6">
          <h1 className="text-2xl font-bold gradient-text">Your Feed</h1>
          <p className="text-gray-600">Check out the latest polls from your friends</p>
        </div>
        
        <div className="space-y-4">
          {demoPolls.map((poll) => (
            <PollCard key={poll.id} {...poll} />
          ))}
        </div>
        
        <CreatePollButton />
      </div>
    </MainLayout>
  );
};

export default Home;
