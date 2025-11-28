// src/js/utils.js

// Form handling utilities
export class FormHandler {
  constructor(formId, options = {}) {
    this.form = document.getElementById(formId);
    this.options = options;
    this.init();
  }

  init() {
    if (!this.form) return;

    this.form.addEventListener('submit', async (e) => {
      e.preventDefault();
      await this.handleSubmit();
    });
  }

  async handleSubmit() {
    const formData = new FormData(this.form);
    const submitBtn = this.form.querySelector('button[type="submit"]');
    
    this.setLoadingState(submitBtn, true);

    try {
      const response = await fetch(this.form.action, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        this.onSuccess(result);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      this.onError(error);
    } finally {
      this.setLoadingState(submitBtn, false);
    }
  }

  setLoadingState(button, isLoading) {
    if (!button) return;

    const text = button.querySelector('.btn-text');
    const loader = button.querySelector('.btn-loader');

    if (text) text.style.display = isLoading ? 'none' : 'inline';
    if (loader) loader.style.display = isLoading ? 'inline-block' : 'none';
    button.disabled = isLoading;
  }

  onSuccess(result) {
    if (this.options.onSuccess) {
      this.options.onSuccess(result);
    }
  }

  onError(error) {
    console.error('Form error:', error);
    if (this.options.onError) {
      this.options.onError(error);
    }
  }
}

// Modal utilities
export class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.init();
  }

  init() {
    if (!this.modal) return;

    // Close on X click
    this.modal.querySelector('.modal-close')?.addEventListener('click', () => {
      this.close();
    });

    // Close on outside click
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.close();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.style.display === 'block') {
        this.close();
      }
    });
  }

  open() {
    if (this.modal) {
      this.modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
  }

  close() {
    if (this.modal) {
      this.modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }
}

// Smooth scrolling
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}