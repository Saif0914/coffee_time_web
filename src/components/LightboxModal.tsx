import React, { useEffect } from 'react';

interface LightboxModalProps {
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  imageSrc,
  onClose,
  onNext,
  onPrev
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <div
      className="mfp-bg mfp-ready"
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 99999,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'zoom-out'
      }}
    >
      <div
        className="mfp-wrap"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <button
          onClick={onClose}
          type="button"
          className="mfp-close"
          style={{
            position: 'absolute',
            top: '-40px',
            right: 0,
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '32px',
            cursor: 'pointer',
            lineHeight: 1
          }}
        >
          &times;
        </button>

        {onPrev && (
          <button
            onClick={onPrev}
            type="button"
            style={{
              position: 'absolute',
              left: '-60px',
              background: 'rgba(0,0,0,0.5)',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span className="ion-md-arrow-back"></span>
          </button>
        )}

        <img
          src={imageSrc}
          alt="Enlarged gallery view"
          style={{
            maxWidth: '85vw',
            maxHeight: '85vh',
            objectFit: 'contain',
            boxShadow: '0 10px 40px rgba(0,0,0,0.8)',
            borderRadius: '4px'
          }}
        />

        {onNext && (
          <button
            onClick={onNext}
            type="button"
            style={{
              position: 'absolute',
              right: '-60px',
              background: 'rgba(0,0,0,0.5)',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span className="ion-chevron-right"></span>
          </button>
        )}
      </div>
    </div>
  );
};
