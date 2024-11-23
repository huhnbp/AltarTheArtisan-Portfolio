import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container, Grid, Paper, TextField, Button, Typography, Box } from '@mui/material';

import cupC from '../assets/cupC.png';
import cupcakes from '../assets/cupcakes.jpg';
import donut from '../assets/donut.jpg';
import MaN from '../assets/MaN.png';
import rosette_cake from '../assets/rosette_cake.png';
import scone from '../assets/scone.png';

const StandardImageList = () => (
    <Paper id="about" elevation={3} sx={{ padding: 3, marginBottom: 4, bgcolor: '#F9aecd' }}>
        <div id='SIL' style={{display:'flex',justifyContent:'center'}}>
            <ImageList sx={{ width: 700, height: 700 }} cols={3} rowHeight={164}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
        </div>
    </Paper>
)

export default StandardImageList

const itemData = [
  {
    img: rosette_cake,
    title: 'cake',
  },
  {
    img: cupcakes,
    title: 'cupcakes',
  },
  {
    img: donut,
    title: 'donuts',
  },
  {
    img: MaN,
    title: 'MaN',
  },
  {
    img: cupC,
    title: 'cupC',
  },
  {
    img: scone,
    title: 'scone',
  },
];