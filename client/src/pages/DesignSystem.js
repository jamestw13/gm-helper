export default function DesignSystem() {
  return (
    <div className='container'>
      <h1 className='ff-serif'>Design System</h1>

      <section id='colors' style={{ margin: '4rem 0' }}>
        <h2 className='numbered-title'>
          <span>01</span> colors
        </h2>

        <div className='flex'>
          <div className='flex-grow'>
            <div
              style={{ padding: '3rem 1rem 1rem', border: '1px solid white' }}
            >
              #0B0D17
            </div>
            <p>
              <span className='text-accent'>RGB</span> 11, 13, 23
            </p>
            <p>
              <span className='text-accent'>HSL</span> 230, 35%, 7%
            </p>
          </div>

          <div className='flex-grow'>
            <div
              className='bg-accent text-dark'
              style={{ padding: '3rem 1rem 1rem', border: '1px solid white' }}
            >
              #D0D6F9
            </div>
            <p>
              <span className='text-accent'>RGB</span> 208, 214, 249
            </p>
            <p>
              <span className='text-accent'>HSL</span> 231, 77%, 90%
            </p>
          </div>

          <div className='flex-grow'>
            <div
              className='bg-white text-dark'
              style={{ padding: '3rem 1rem 1rem', border: '1px solid white' }}
            >
              #FFFFFF
            </div>
            <p>
              <span className='text-accent'>RGB</span> 255, 255, 255
            </p>
            <p>
              <span className='text-accent'>HSL</span> 0, 0%, 100%
            </p>
          </div>
        </div>
      </section>
      <section id='typography' style={{ margin: '4rem 0' }}>
        <h2 className='numbered-title'>
          <span>02</span> typography
        </h2>
        <div className='flex'>
          <div className='flow' style={{ flexBasis: '100%' }}>
            <div>
              <p className='text-accent'>Slabo 27px - 150px</p>
              <p className='fs-900 ff-serif uppercase'>Heading 1</p>
            </div>
            <div>
              <p className='text-accent'>Slabo 27px - 100px</p>
              <p className='fs-800 ff-serif uppercase'>Heading 2</p>
            </div>
            <div>
              <p className='text-accent'>Slabo 27px - 56px</p>
              <p className='fs-700 ff-serif uppercase'>Heading 3</p>
            </div>
            <div>
              <p className='text-accent'>Slabo 27px - 32px</p>
              <p className='fs-600 ff-serif uppercase'>Heading 4</p>
            </div>
            <div>
              <p className='text-accent'>
                Ubuntu Condensed - 28px - 4.75 Character Space
              </p>
              <p className='fs-500 ff-sans-cond uppercase letter-spacing-1 text-accent'>
                Heading 5
              </p>
            </div>
          </div>

          <div className='flow' style={{ flexBasis: '100%' }}>
            <div>
              <p className='text-accent'>Slabp 27px - 28px</p>
              <p className='fs-400 ff-serif uppercase'>Subheading 1</p>
            </div>
            <div>
              <p className='text-accent'>
                Ubuntu Condensed - 14px - 2.35 Character Space
              </p>
              <p className='fs-200 ff-sans-cond uppercase letter-spacing-3'>
                Subheading 2
              </p>
            </div>
            <div>
              <p className='text-accent'>
                Ubuntu Condensed - 16px - 2.7 Character Space
              </p>
              <p className='fs-300 ff-sans-cond uppercase letter-spacing-2'>
                Nav Text
              </p>
            </div>
            <div>
              <p className='text-accent'>Body text</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur nulla, suscipit quisquam ratione quibusdam commodi
                eligendi facere nobis ad neque quidem laborum accusantium vitae
                eius! Temporibus commodi nam optio incidunt sit voluptatem
                dolores dolorum! Hic nam, odio sapiente dolorem ea in itaque
                explicabo voluptates repellendus asperiores possimus natus,
                commodi odit!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='flow' id='interactive-elements'>
        <h2 className='numbered-title'>
          <span>03</span> Interactive elements
        </h2>

        {/* navigation */}
        <div>
          <nav className='grid grid-center'>
            <ul className='primary-navigation underline-indicators flex'>
              <li className='active'>
                <a className='uppercase text-white letter-spacing-2' href='#'>
                  <span>01</span> Active
                </a>
              </li>
              <li>
                <a className='uppercase text-white letter-spacing-2' href='#'>
                  <span>02</span> Hovered
                </a>
              </li>
              <li>
                <a className='uppercase text-white letter-spacing-2' href='#'>
                  <span>03</span> Idle
                </a>
              </li>
            </ul>
            <p>Different States of Navigation Bar</p>
          </nav>
        </div>

        <div className='flex'>
          <div className='grid grid-center' style={{ flexBasis: '100%' }}>
            {/* explore button */}
            <a
              href='#'
              className='large-button bg-white uppercase ff-serif text-dark fs-600'
              style={{ marginTop: '5rem' }}
            >
              Explore
            </a>
            <p>Landing Page Main Button - Idle</p>

            <a
              href='#'
              className='large-button bg-white uppercase ff-serif text-dark fs-600 active'
              style={{ marginTop: '5rem' }}
            >
              Explore
            </a>
            <p>Landing Page Main Button - Hover</p>
          </div>

          <div
            className='flow grid grid-center'
            style={{ marginBottom: '50vh', flexBasis: '100%' }}
          >
            {/* Tabs */}
            <div className='tab-list underline-indicators flex'>
              <button
                aria-selected='true'
                className='bg-dark uppercase text-accent letter-spacing-2 ff-sans-cond'
              >
                Moon
              </button>

              <button
                aria-selected='false'
                className='bg-dark uppercase text-accent letter-spacing-2 ff-sans-cond'
              >
                Mars
              </button>

              <button
                aria-selected='false'
                className='bg-dark uppercase text-accent letter-spacing-2 ff-sans-cond'
              >
                Europa
              </button>
            </div>
            <p>Tabs (Active, Hover, Idle)</p>

            {/* Dots */}
            <div className='dot-indicators flex'>
              <button aria-selected='true'>
                <span className='sr-only'>Slide Title</span>
              </button>

              <button aria-selected='false'>
                <span className='sr-only'>Slide Title</span>
              </button>
              <button aria-selected='false'>
                <span className='sr-only'>Slide Title</span>
              </button>
            </div>
            <p>Slider 1 Stages (Active, Hover, Idle)</p>

            {/* Numbers */}
            <div className='grid numbered-indicators'>
              <button aria-selected='true'>1</button>
              <button aria-selected='false'>2</button>
              <button aria-selected='false'>3</button>
            </div>
            <p>Slider 2 States (Active, Hover, Idle)</p>
          </div>
        </div>
      </section>
    </div>
  );
}
