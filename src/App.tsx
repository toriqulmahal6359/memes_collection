import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ImageList } from './ImageList';
import { Image } from './types';

export type ImageItems = Image[];

const App: React.FC = (props) => {
  const APP_URL = "http://localhost:1337/api/memes";
  const [images, setImages] = useState<ImageItems>([]);
    useEffect(() => {
      axios.get(`${APP_URL}/get/images`).then((response: AxiosResponse) => {
          console.log(response.data);
          setImages(response.data);
      })
}, []);
  return <>
     <BrowserRouter>
      <Switch>
        <Route path="/">
          <React.Fragment>
            <ImageList items={images}/>
          </React.Fragment>
        </Route>
      </Switch>
    </BrowserRouter>
  </>
   
};


export default App;
