// src/components/EditorsPick.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { id: 1, title: 'Did you know each insect is a host to ten bacterial species?' },
  { id: 2, title: 'Did you know trees can communicate?' },
  { id: 3, title: 'Did you know a jockey once won a race after he had died?' },
  { id: 4, title: 'UAE: The untold story of Jazeera Al Hamra’s survival' },
  { id: 5, title: 'Did you know your liver’s size fluctuates significantly throughout the day?' },
  { id: 6, title: 'Did you know Queen Elizabeth II kept track of when she wore each outfit?' },
  { id: 7, title: 'Did you know the Eagles’ stadium once had a courtroom?' },
  { id: 8, title: 'Did you know an astronaut was allergic to the moon?' },
];

const EditorsPick = () => {
  return (
    <div className='bg-white border border-sky-300 p-5 '>
      <h2 className='font-bold mb-5'>Editor's Pick</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className='mb-6'>
            <Link to={`/post/${post.id}`} className='text-sky-900 font-bold text-xs line-clamp-none'>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditorsPick;
