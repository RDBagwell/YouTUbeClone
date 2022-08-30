import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture } from '../utils/constants';
import { height } from '@mui/system';

const ChannelCard = ({channelDetail}) => (
    <Box sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: {xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto'
    }} >
      <Link to={`/channle/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white'
        }}>
          <CardMedia 
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} 
          alt={channelDetail?.snippet?.title} 
          sx={{ borderRadius: '50%', width: '180px', height: '180px', mb: 2, border: '1px soild #e3e3e3'}}
          />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
)


export default ChannelCard