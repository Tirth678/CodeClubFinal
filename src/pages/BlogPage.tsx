import React from 'react';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import BlogGrid from '../components/Blog/BlogGrid';

const BlogPage = () => {
  return (
    <div className="pt-24 pb-32">
      <Container>
        <div className="space-y-8">
          <SectionTitle>Events</SectionTitle>
          <BlogGrid />
        </div>
      </Container>
    </div>
  );
};

export default BlogPage;
