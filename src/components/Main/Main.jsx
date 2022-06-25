import CardsWrapper from '../CardsWrapper/CardsWrapper';
import ImageWrapper from '../ImageWrapper/ImageWrapper';
import MenuWrapper from '../MenuWrapper/MenuWrapper';
import TextWrapper from '../TextWrapper/TextWrapper';

import './Main.css';

const Main = ({ data, planetImg }) => {
  return (
    <>
      {data === undefined ? (
        <></>
      ) : (
        <main>
          <div className='main'>
            <MenuWrapper data={data} />
            <ImageWrapper data={data.name} planetImg={planetImg} />
            <TextWrapper data={data} />
            <CardsWrapper data={data} />
          </div>
        </main>
      )}
    </>
  );
};

export default Main;
