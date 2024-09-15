import React from 'react';

const Tutorials = () => {
  const tutorials = [
    { title: 'React Basics', link: '#', description: 'Learn the basics of React' },
    { title: 'Semantic UI in React', link: '#', description: 'Using Semantic UI for styling React components' },
    { title: 'Advanced React Patterns', link: '#', description: 'Dive deep into advanced React patterns' }
  ];

  return (
    <section>
      <h2>Tutorials</h2>
      <div className="tutorials">
        {tutorials.map((tutorial, index) => (
          <div key={index} className="tutorial-card">
            <h3>{tutorial.title}</h3>
            <p>{tutorial.description}</p>
            <a href={tutorial.link}>Watch Now</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tutorials;
