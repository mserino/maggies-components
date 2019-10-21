'use strict';

/**
 * @module Card
 * @description
 * 
 * Create a Card UI
 */

export default class Card {

  /**
   * Constructor function
   */
  constructor( element, options = {} ) {

    this.currentIndex = 0;

    // Defaults
		const defaults = {

			// Event callbacks
			onCreate: null,
		};

    if ( ! element || 'string' !== typeof element ) {
      console.error( 'Maggie\'s Card Component: No target supplied. A valid target (accordion area) must be used.' );
			return;
    }

    this.$cards = document.querySelectorAll( element );

    // Bail out if there are no cards
    if( ! this.$cards ) {
      console.error( 'Maggie\'s Card Component: Target not found. A valid target must be used' );
      return;
    }

    // Settings
		this.settings = Object.assign( {}, defaults, options );

		this.$cards.forEach( ( cardArea, index ) => {
			this.setupCard( cardArea, index );
    } );
    
    /**
		 * Called after the accordion is initialized on page load.
		 * @callback onCreate
		 */
		if ( this.settings.onCreate && 'function' === typeof this.settings.onCreate ) {
			this.settings.onCreate.call();
		}
  }

  setupCard( card ) {
    const images = card.querySelectorAll( 'img' );
    const controls = card.querySelectorAll( '.slideshow-control' );

    if (images.length > 1) {
      this.setupSlideShow( images );
    }

    controls.forEach( ( control ) => {
      control.addEventListener( 'click', ( event ) => {
        const target = event.target.dataset.target;
        if ( target === 'next' ) {
          this.showNextSlide( images );
        } else {
          this.showPreviousSlide( images );
        }
      } );
    } );
  }

  setupSlideShow( images ) {
    this.currentIndex = 0;
    this.showCurrentIndex( images );
  }

  showNextSlide( images ) {
    this.currentIndex += 1;

    this.showCurrentIndex( images );
  }

  showPreviousSlide( images ) {
    this.currentIndex -= 1;

    this.showCurrentIndex( images );
  }

  showCurrentIndex( images ) {
    images.forEach( (image ) => {
      image.classList.remove( '-visible' );
      image.classList.add( '-hidden' );
    } );

    images[this.currentIndex].classList.add('-visible');
  }
}