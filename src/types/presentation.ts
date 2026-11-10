export interface Slide {
  id: string;
  index: number;
  section: string;
  title: string;
  highlightWords?: string[];
  subtitle?: string;
  badge?: string;
  totalSubSteps: number;
  type: 'cover' | 'agenda' | 'problem' | 'methodology' | 'architecture' | 'mockup' | 'evidence' | 'timeline' | 'conclusion';
  data?: any;
}

export interface NavigationState {
  currentSlideIndex: number;
  currentSubStep: number;
  totalSlides: number;
  isFullscreen: boolean;
  goToNext: () => void;
  goToPrev: () => void;
  goToSlide: (index: number) => void;
  toggleFullscreen: () => void;
}
