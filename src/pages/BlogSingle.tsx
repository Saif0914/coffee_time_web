import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';

export const BlogSingle: React.FC = () => {
  const [commentForm, setCommentForm] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'John Doe',
      date: 'June 27, 2018 at 2:21pm',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?',
      replies: [
        {
          id: 2,
          name: 'Sarah Connor',
          date: 'June 27, 2018 at 3:15pm',
          text: 'Great insights on espresso brewing technique. Tried this out at our shop yesterday with phenomenal feedback!'
        }
      ]
    },
    {
      id: 3,
      name: 'Alex Rivera',
      date: 'June 28, 2018 at 10:45am',
      text: 'The advice regarding water temperature and extraction time made an instant difference in clarity and sweetness.',
      replies: []
    }
  ]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentForm.name || !commentForm.message) return;
    setComments([
      ...comments,
      {
        id: Date.now(),
        name: commentForm.name,
        date: 'Just now',
        text: commentForm.message,
        replies: []
      }
    ]);
    setCommentForm({ name: '', email: '', website: '', message: '' });
  };

  return (
    <>
      <PageHeader
        title="Blog Details"
        breadcrumbs={[{ label: 'Blog', path: '/blog' }, { label: 'Blog Single' }]}
        noBanner={true}
      />

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 ftco-animated fadeInUp">
              <h2 className="mb-3">10 Tips For The Coffee Lover &amp; Traveler</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia
                suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto
                optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse
                minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia
                officia optio deserunt molestiae voluptates soluta architecto tempora.
              </p>
              <p>
                <img src="images/image_1.jpg" alt="Coffee beans" className="img-fluid" />
              </p>
              <p>
                Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis
                repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate
                quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi
                deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse
                vero ut ea, repudiandae suscipit!
              </p>
              <h2 className="mb-3 mt-5">#2. Roasting Profiles and Notes</h2>
              <p>
                Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius
                aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut
                officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex
                earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic
                non? Debitis commodi aut, adipisci.
              </p>
              <p>
                <img src="images/image_2.jpg" alt="Latte art" className="img-fluid" />
              </p>
              <p>
                Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil
                explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate
                maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia
                aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam
                iste enim veniam, modi rem maiores.
              </p>

              <div className="tag-widget post-tag-container mb-5 mt-5">
                <div className="tagcloud">
                  <a href="#life" className="tag-cloud-link">Life</a>
                  <a href="#sport" className="tag-cloud-link">Sport</a>
                  <a href="#tech" className="tag-cloud-link">Tech</a>
                  <a href="#travel" className="tag-cloud-link">Travel</a>
                </div>
              </div>

              <div className="about-author d-flex">
                <div className="bio align-self-md-center mr-5">
                  <img
                    src="images/person_4.jpg"
                    alt="Lance Smith"
                    className="img-fluid mb-4"
                    style={{ borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                </div>
                <div className="desc align-self-md-center">
                  <h3>Lance Smith</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem
                    necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa
                    sapiente consectetur similique, inventore eos fugit cupiditate numquam!
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-5">
                <h3 className="mb-5">{comments.length} Comments</h3>
                <ul className="comment-list">
                  {comments.map((c) => (
                    <li key={c.id} className="comment">
                      <div className="vcard bio">
                        <img src="images/person_2.jpg" alt="User avatar" />
                      </div>
                      <div className="comment-body">
                        <h3>{c.name}</h3>
                        <div className="meta">{c.date}</div>
                        <p>{c.text}</p>
                        <p>
                          <a href="#reply" className="reply">Reply</a>
                        </p>
                      </div>

                      {c.replies && c.replies.length > 0 && (
                        <ul className="children">
                          {c.replies.map((reply) => (
                            <li key={reply.id} className="comment">
                              <div className="vcard bio">
                                <img src="images/person_3.jpg" alt="Reply avatar" />
                              </div>
                              <div className="comment-body">
                                <h3>{reply.name}</h3>
                                <div className="meta">{reply.date}</div>
                                <p>{reply.text}</p>
                                <p>
                                  <a href="#reply" className="reply">Reply</a>
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="comment-form-wrap pt-5">
                  <h3 className="mb-5">Leave a comment</h3>
                  <form onSubmit={handleCommentSubmit} className="p-5 bg-light">
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={commentForm.name}
                        onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={commentForm.email}
                        onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="website">Website</label>
                      <input
                        type="url"
                        className="form-control"
                        id="website"
                        value={commentForm.website}
                        onChange={(e) => setCommentForm({ ...commentForm, website: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        cols={30}
                        rows={6}
                        className="form-control"
                        value={commentForm.message}
                        onChange={(e) => setCommentForm({ ...commentForm, message: e.target.value })}
                        required
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        value="Post Comment"
                        className="btn py-3 px-4 btn-primary"
                        style={{ cursor: 'pointer' }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-md-4 sidebar ftco-animated fadeInUp">
              <div className="sidebar-box">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="search-form"
                >
                  <div className="form-group">
                    <div className="icon">
                      <span className="icon-search"></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Search..." />
                  </div>
                </form>
              </div>

              <div className="sidebar-box ftco-animated fadeInUp">
                <div className="categories">
                  <h3>Categories</h3>
                  <li>
                    <a href="#cat">Tour <span>(12)</span></a>
                  </li>
                  <li>
                    <a href="#cat">Hotel <span>(22)</span></a>
                  </li>
                  <li>
                    <a href="#cat">Coffee <span>(37)</span></a>
                  </li>
                  <li>
                    <a href="#cat">Drinks <span>(42)</span></a>
                  </li>
                  <li>
                    <a href="#cat">Foods <span>(14)</span></a>
                  </li>
                  <li>
                    <a href="#cat">Travel <span>(140)</span></a>
                  </li>
                </div>
              </div>

              <div className="sidebar-box ftco-animated fadeInUp">
                <h3>Recent Blog</h3>
                <div className="block-21 mb-4 d-flex">
                  <a
                    className="blog-img mr-4"
                    style={{ backgroundImage: 'url(images/image_1.jpg)' }}
                  ></a>
                  <div className="text">
                    <h3 className="heading">
                      <Link to="/blog-single">Even the all-powerful Pointing has no control about</Link>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#"><span className="icon-calendar"></span> July 12, 2018</a>
                      </div>
                      <div>
                        <a href="#"><span className="icon-person"></span> Admin</a>
                      </div>
                      <div>
                        <a href="#"><span className="icon-chat"></span> 19</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                  <a
                    className="blog-img mr-4"
                    style={{ backgroundImage: 'url(images/image_2.jpg)' }}
                  ></a>
                  <div className="text">
                    <h3 className="heading">
                      <Link to="/blog-single">Even the all-powerful Pointing has no control about</Link>
                    </h3>
                    <div className="meta">
                      <div>
                        <a href="#"><span className="icon-calendar"></span> July 12, 2018</a>
                      </div>
                      <div>
                        <a href="#"><span className="icon-person"></span> Admin</a>
                      </div>
                      <div>
                        <a href="#"><span className="icon-chat"></span> 19</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sidebar-box ftco-animated fadeInUp">
                <h3>Tag Cloud</h3>
                <div className="tagcloud">
                  <a href="#dish" className="tag-cloud-link">dish</a>
                  <a href="#menu" className="tag-cloud-link">menu</a>
                  <a href="#food" className="tag-cloud-link">food</a>
                  <a href="#sweet" className="tag-cloud-link">sweet</a>
                  <a href="#tasty" className="tag-cloud-link">tasty</a>
                  <a href="#delicious" className="tag-cloud-link">delicious</a>
                  <a href="#desserts" className="tag-cloud-link">desserts</a>
                  <a href="#drinks" className="tag-cloud-link">drinks</a>
                </div>
              </div>

              <div className="sidebar-box ftco-animated fadeInUp">
                <h3>Paragraph</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem
                  necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa
                  sapiente consectetur similique, inventore eos fugit cupiditate numquam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
