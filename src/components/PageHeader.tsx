import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
  noBanner?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  breadcrumbs,
  bgImage,
  noBanner = false
}) => {
  const showBanner = !noBanner && Boolean(bgImage);

  return (
    <section className="page-header-wrap" style={{ position: 'relative', zIndex: 1 }}>
      <div
        className="page-header-inner"
        style={{
          backgroundImage: showBanner ? `url(${bgImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          minHeight: noBanner ? '280px' : '400px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        {showBanner && (
          <div
            className="overlay"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)'
            }}
          />
        )}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-md-7 col-sm-12 pt-5 pb-3">
              <h1
                className="mb-3 mt-4 bread"
                style={{
                  fontSize: '46px',
                  fontWeight: 700,
                  color: '#ffffff',
                  textShadow: '0 2px 14px rgba(0, 0, 0, 0.7)',
                  letterSpacing: '1px'
                }}
              >
                {title}
              </h1>
              <p
                className="breadcrumbs"
                style={{
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  margin: 0
                }}
              >
                <span className="mr-2">
                  <Link
                    to="/"
                    style={{
                      color: '#c49b63',
                      textDecoration: 'none',
                      borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
                      paddingBottom: '2px'
                    }}
                  >
                    Home
                  </Link>
                </span>
                {breadcrumbs.map((crumb, idx) => (
                  <span key={idx} className={idx === breadcrumbs.length - 1 ? '' : 'mr-2'}>
                    {crumb.path ? (
                      <Link
                        to={crumb.path}
                        className="mr-2"
                        style={{
                          color: '#c49b63',
                          textDecoration: 'none',
                          borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
                          paddingBottom: '2px'
                        }}
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span
                        style={{
                          color: '#ffffff',
                          borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
                          paddingBottom: '2px'
                        }}
                      >
                        {crumb.label}
                      </span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
