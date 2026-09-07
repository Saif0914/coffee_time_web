import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { StaggerContainer, StaggerItem, HoverLift } from '../components/ScrollAnimation';
import { BLOG_POSTS } from '../data/mockData';

export const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <PageHeader title="Blog" breadcrumbs={[{ label: 'Blog' }]} noBanner={true} />

      <section className="ftco-section">
        <div className="container">
          <StaggerContainer staggerDelay={0.12} className="row d-flex">
            {BLOG_POSTS.map((blog) => (
              <div key={blog.id} className="col-md-4 d-flex">
                <StaggerItem yOffset={30} className="w-100">
                  <HoverLift liftY={-8} className="blog-entry align-self-stretch h-100">
                    <Link
                      to="/blog-single"
                      className="block-20"
                      style={{ backgroundImage: `url(${blog.image})`, borderRadius: '4px' }}
                    ></Link>
                    <div className="text py-4 d-block">
                      <div className="meta">
                        <div>
                          <Link to="/blog-single">{blog.date}</Link>
                        </div>
                        <div>
                          <Link to="/blog-single">{blog.author}</Link>
                        </div>
                        <div>
                          <Link to="/blog-single" className="meta-chat">
                            <span className="icon-chat"></span> {blog.commentsCount}
                          </Link>
                        </div>
                      </div>
                      <h3 className="heading mt-2">
                        <Link to="/blog-single">{blog.title}</Link>
                      </h3>
                      <p>{blog.excerpt}</p>
                    </div>
                  </HoverLift>
                </StaggerItem>
              </div>
            ))}
          </StaggerContainer>

          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li>
                    <a
                      href="#prev"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage((p) => Math.max(1, p - 1));
                      }}
                    >
                      &lt;
                    </a>
                  </li>
                  {[1, 2, 3, 4, 5].map((page) => (
                    <li key={page} className={currentPage === page ? 'active' : ''}>
                      <a
                        href={`#page-${page}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(page);
                        }}
                      >
                        {page}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#next"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage((p) => Math.min(5, p + 1));
                      }}
                    >
                      &gt;
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
