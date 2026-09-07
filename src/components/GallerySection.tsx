import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LightboxModal } from './LightboxModal';
import { StaggerContainer, StaggerItem } from './ScrollAnimation';

const GALLERY_IMAGES = [
  'images/gallery-1.jpg',
  'images/gallery-2.jpg',
  'images/gallery-3.jpg',
  'images/gallery-4.jpg'
];

export const GallerySection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % GALLERY_IMAGES.length);
    }
  };

  const handlePrev = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  return (
    <>
      <section className="ftco-gallery">
        <div className="container-wrap">
          <StaggerContainer staggerDelay={0.12} className="row no-gutters">
            {GALLERY_IMAGES.map((img, idx) => (
              <div key={idx} className="col-md-3">
                <StaggerItem yOffset={25}>
                  <motion.a
                    href={`#gallery-${idx}`}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.35 }}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedIdx(idx);
                    }}
                    className="gallery img d-flex align-items-center"
                    style={{ backgroundImage: `url(${img})`, cursor: 'pointer', overflow: 'hidden' }}
                  >
                    <div className="icon mb-4 d-flex align-items-center justify-content-center">
                      <span className="icon-search"></span>
                    </div>
                  </motion.a>
                </StaggerItem>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <LightboxModal
        isOpen={selectedIdx !== null}
        imageSrc={selectedIdx !== null ? GALLERY_IMAGES[selectedIdx] : ''}
        onClose={() => setSelectedIdx(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
};
