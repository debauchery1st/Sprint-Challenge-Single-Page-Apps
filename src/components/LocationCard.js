import React from "react";
import {UL, LI} from './Styles';

export default function LocationCard(props) {
   const {name, type, dimension} = props.cardInfo;
  return <UL>
    {[name, type, dimension].map((info, idx) => <LI key={`${idx}-${name}-${Math.floor(Math.random()*10000)}`}>{info}</LI>)}
    </UL>;
}
