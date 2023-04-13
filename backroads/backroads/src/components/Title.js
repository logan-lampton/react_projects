function Title({wordOne, wordTwo}) {
  return (
    <>
      <div className='section-title'>
        <h2>
          {wordOne} <span>{wordTwo}</span>
        </h2>
      </div>
    </>
  );
}

export default Title;
