import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, useMediaQuery, Drawer, List, ListItem, Box } from '@mui/material';
import { useTheme } from '@mui/system';

import Instagram_Glyph_Gradient from '../assets/Instagram_Glyph_Gradient.png'
import facebook from '../assets/facebook.png'
import twitch from '../assets/twitch.png'
import tikTok from '../assets/tik-tok.png'

const MyHeader = () => {
    const theme  = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    }

    const links = ['Instagram' , 'Facebook','Twitch', 'TikTok'];
    const l = [
        'https://www.instagram.com/altar_the_artisan/?hl=en',
        'https://www.facebook.com/profile.php?id=100024618621602&sk=photos',
        'https://www.twitch.tv/altartheartisan',
        'https://www.tiktok.com/@altartheartisan'
    ];
    const routeLink = (i) => {
        window.open(l[i], "_blank");
    }

    return (
        <AppBar position="sticky" sx={{bgcolor: "#D986b9"}}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, color:'black' }}>
              AltarTheArtisan
            </Typography>

            { matches ? (
                <div>
                    <a href="https://www.instagram.com/altar_the_artisan/?hl=en"><img src={Instagram_Glyph_Gradient} style={{width:'2%', paddingRight:'5px'}}/></a>
                    <a href="https://www.facebook.com/profile.php?id=100024618621602&sk=photos" title="facebook icons"><img src={facebook} style={{width:'2%', paddingRight:'5px'}}/></a>
                    <a href="https://www.twitch.tv/altartheartisan"><img src={twitch} style={{width:'2%', paddingRight:'5px'}}/></a>
                    <a href="https://www.tiktok.com/@altartheartisan"><img src={tikTok} style={{width:'2%', paddingRight:'5px'}}/></a>
                </div>
            ): (
            <div>
                <Button color="black" onClick={toggleDrawer}>
                  Menu
                </Button>
                <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
                  <List>
                    {links.map((link, index) => (
                      <ListItem button key={index} onClick={()=>{routeLink(index)}}>
                        <Typography>{link}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </Drawer>
              </div>
            )}
          </Toolbar>
        </AppBar>
    );
}

export default MyHeader;