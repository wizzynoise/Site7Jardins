import React from 'react';

const BlogPage = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Dicas de Jardinagem</h1>
      <p className="mb-6">Explore artigos com conselhos úteis sobre como cuidar do seu jardim, manter a relva saudável, escolher as melhores plantas e muito mais.</p>
      <img
        src="/images/blog.jpg"
        alt="Blog sobre jardinagem"
        className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
      />
    </div>
  );
};

export default BlogPage;