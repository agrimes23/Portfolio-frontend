import axios from 'axios';

export const getVideos = async () => {
  try {
    const response = await axios.get('https://portfolio-backend-agrimes.vercel.app/api/videos');
    const videos = response.data;
    return videos.resources;
  } catch (error) {
    console.error('Error fetching videos:', error);
  }
};