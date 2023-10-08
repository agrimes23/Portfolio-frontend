import axios from 'axios';

export const getVideos = async () => {
  try {
    const response = await axios.get('/api/videos');
    const videos = response.data;
    // Process and display videos in your frontend
    console.log(videos);
  } catch (error) {
    console.error('Error fetching videos:', error);
  }
};