import React from 'react';
import Img1 from '../../Images/angular.png';
import Img2 from '../../Images/d3.png';
import Img3 from '../../Images/evista.png';
import Img4 from '../../Images/jenkins.png';
import Img5 from '../../Images/postcss.png';
import Img6 from '../../Images/react.png';
import Img7 from "../../Images/redux.png";
import Img8 from "../../Images/sass.png";
import Img9 from "../../Images/ts.png";
import Img10 from "../../Images/webpack.png";
import {
  CardBox,
  CardContainer,
  CardEmpty,
  CardImg
} from './CardElements';

const Game = () => {
  return (
    <CardContainer className='Cardcontainer'>
      <CardBox className='Cardbox' data-framework="card1">
        <CardEmpty className='Face'/>
        <CardImg className='CardImg' src={Img1}/>
      </CardBox>
      <CardBox className='Cardbox' data-framework="card2">
        <CardEmpty className='Face'/>
        <CardImg className='CardImg' src={Img2}/>
      </CardBox>
      <CardBox className='Cardbox' data-framework="card3">
        <CardEmpty className='Face'/>
        <CardImg className='CardImg' src={Img3}/>
      </CardBox>
      <CardBox className='Cardbox' data-framework="card4">
        <CardEmpty className='Face'/>
        <CardImg className='CardImg' src={Img4}/>
      </CardBox>
      <CardBox className='Cardbox' data-framework="card5">
        <CardEmpty className='Face'/>
        <CardImg className='CardImg' src={Img5}/>
      </CardBox>
      <CardBox className='Cardbox' data-framework="card6">
        <CardEmpty className='Face'/>
        <CardImg className='CardImg' src={Img6}/>
      </CardBox>
      <CardBox className='Cardbox' data-framework="card7">
        <CardEmpty className='Face'/>
        <CardImg className='CardImg' src={Img7}/>
      </CardBox>
      <CardBox className='Cardbox' data-framework="card8">
        <CardEmpty className='Face'/>
        <CardImg className='CardImg' src={Img8}/>
      </CardBox>
      <CardBox className='Cardbox' data-framework="card9">
        <CardEmpty className='Face'/>
        <CardImg className='CardImg' src={Img9}/>
      </CardBox>
      <CardBox className='Cardbox' data-framework="card10">
        <CardEmpty className='Face'/>
        <CardImg className='CardImg' src={Img10}/>
      </CardBox>
      <CardBox className='Cardbox' data-framework="card1">
        <CardEmpty className='Face'/>
        <CardImg className='CardImg' src={Img1}/>
      </CardBox>
      <CardBox className='Cardbox' data-framework="card2">
        <CardEmpty className='Face'/>
        <CardImg className='CardImg' src={Img2}/>
      </CardBox>
      <CardBox className='Cardbox' data-framework="card3">
        <CardEmpty className='Face'/>
        <CardImg className='CardImg' src={Img3}/>
      </CardBox>
      <CardBox className='Cardbox' data-framework="card4">
        <CardEmpty className='Face'/>
        <CardImg className='CardImg' src={Img4}/>
      </CardBox>
      <CardBox className='Cardbox' data-framework="card5">
        <CardEmpty className='Face'/>
        <CardImg className='CardImg' src={Img5}/>
      </CardBox>
      <CardBox className='Cardbox' data-framework="card6">
        <CardEmpty className='Face'/>
        <CardImg className='CardImg' src={Img6}/>
      </CardBox>
      <CardBox className='Cardbox' data-framework="card7">
        <CardEmpty className='Face'/>
        <CardImg className='CardImg' src={Img7}/>
      </CardBox>
      <CardBox className='Cardbox' data-framework="card8">
        <CardEmpty className='Face'/>
        <CardImg className='CardImg' src={Img8}/>
      </CardBox>
      <CardBox className='Cardbox' data-framework="card9">
        <CardEmpty className='Face'/>
        <CardImg className='CardImg' src={Img9}/>
      </CardBox>
      <CardBox className='Cardbox' data-framework="card10">
        <CardEmpty className='Face'/>
        <CardImg className='CardImg' src={Img10}/>
      </CardBox>
    </CardContainer>
  );
};

export default Game;


