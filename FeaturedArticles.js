import React from 'react';
import faker from 'faker';

const FeaturedArticles = () => {
  const articles = Array(3).fill().map(() => ({
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    imageUrl: `https://picsum.photos/200/300?random=${Math.random()}`
  }));

  return (
    <section>
      <h2>Featured Articles</h2>
      <div className="articles">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <img src={article.imageUrl} alt="article" />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArticles;
