'use client';

import React, { ReactNode } from 'react';
import styles from './NewsPage.module.css';

type NewsHeroProps = {
  children?: ReactNode;
};

const NewsPage = ({ children }: NewsHeroProps) => {
  return (
    <>
      {/* Hero Section */}
      <div className={styles.home}>
        <div
          className={styles.home_background}
          style={{
            backgroundImage: "url('/news_background.jpg')",
          }}
        >
          <div className={styles.home_content}>
            <h1>The News</h1>
          </div>
        </div>
      </div>

      {children}

      {/* News Section */}
      <div className={styles.news}>
        {/* <div className={styles.news_container}> */}
          <div className={styles.news_wrapper}>
            {/* Main News Posts */}
            <div className={styles.news_main}>
              <div className={styles.news_posts}>
                {[1, 2, 3].map((id) => (
                  <article className={styles.news_post} key={id}>
                    <div className={styles.news_post_image}>
                      <img src={`/news_1.jpg`} alt="news" />
                    </div>

                    <div className={styles.news_post_top}>
                      <div className={styles.news_post_date_container}>
                        <div className={styles.news_post_date}>
                          <div>18</div>
                          <div>dec</div>
                        </div>
                      </div>

                      <div className={styles.news_post_title_container}>
                        <h2 className={styles.news_post_title}>
                          <a href="/news_post.html">
                            {id === 1
                              ? 'Why do you need a qualification?'
                              : id === 2
                              ? 'Our new courses just for you?'
                              : 'Why take our graduate program?'}
                          </a>
                        </h2>

                        <div className={styles.news_post_meta}>
                          <span className={styles.news_post_author}>
                            <a href="#">By Christian Smith</a>
                          </span>
                          <span>|</span>
                          <span className={styles.news_post_comments}>
                            <a href="#">3 Comments</a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className={styles.news_post_text}>
                      In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc...
                    </p>

                    <div className={styles.news_post_button}>
                      <a href="#">Read More</a>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <nav className={styles.pagination}>
                <ul>
                  {['01', '02', '03'].map((num, i) => (
                    <li key={i} className={i === 0 ? styles.page_active : ''}>
                      <a href="#">{num}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Sidebar */}
            <div className={styles.sidebar}>
              {/* Archives */}
              <section className={styles.sidebar_section}>
                <h3 className={styles.sidebar_section_title}>Archives</h3>
                <ul className={styles.sidebar_list}>
                  {[
                    'Design Courses',
                    'All you need to know',
                    'Uncategorized',
                    'About Our Departments',
                    'Choose the right course',
                  ].map((text) => (
                    <li key={text} className={styles.sidebar_list_item}>
                      <a href="#">{text}</a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Latest Posts */}
              <section className={styles.sidebar_section}>
              <h3 className={`${styles.sidebar_section_title} ${styles.latesth3}`}>Latest posts</h3>

                <div className={styles.latest_posts}>
                  {[1, 2, 3].map((id) => (
                    <article key={id} className={styles.latest_post}>
                      <img
                        src={`/latest_3.jpg`}
                        alt="latest"
                        className={styles.latest_post_image}
                      />
                      <h4 className={styles.latest_post_title}>
                        <a href="/news_post.html">
                          Why do you need a qualification?
                        </a>
                      </h4>
                      <div className={styles.latest_post_meta}>
                        <span className={styles.latest_post_author}>
                          <a href="#">By Christian Smith</a>
                        </span>
                        <span>|</span>
                        <span className={styles.latest_post_comments}>
                          <a href="#">3 Comments</a>
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Tags */}
              <section className={styles.sidebar_section}>
                <h3 className={styles.sidebar_section_title}>Tags</h3>
                <div className={styles.tags}>
                  {['Course', 'Design', 'FAQ', 'Teachers', 'School', 'Graduate'].map((tag) => (
                    <span key={tag} className={styles.tag}>
                      <a href="#">{tag}</a>
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
      </div>
    </>
    
  );
};


export default NewsPage;
