import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Box, Typography, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { Videos } from './';
import { fetchFromApi } from '../utils/fetchFromApi';

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState(null)

  useEffect(()=>{
    fetchFromApi(`videos?params=snippet,statistics&id=${id}`).then((data)=>{
      setVideoDetails(data.items[0])
    })
  }, [id]);

  if(!videoDetails?.snippet) return 'Loading...'
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetails;


  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color='white' variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack 
            direction='row' 
            justifyContent='space-between' 
            sx={{
              color: 'white'
            }}
            py={1}
            px={2}
            >
            <Link to={`/channel/${channelId}`}>
              <Typography>
                {channelTitle}
              </Typography>
            </Link>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail