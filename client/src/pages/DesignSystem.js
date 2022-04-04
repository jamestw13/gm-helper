export default function DesignSystem() {
  return (
    <div className='container'>
      <h1>Design System</h1>

      <section id='colors'>
        <h2>
          <span>01</span> colors
        </h2>

        <div className='flex'>
          <div>
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

          <div>
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

          <div>
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
      <section id='typography'>
        <h2>
          <span>02</span> typography
        </h2>
      </section>
    </div>
  );
}
