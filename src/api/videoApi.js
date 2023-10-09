import axios from 'axios';

export const getVideos = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/videos');
    const videos = response.data;
    // Process and display videos in your frontend
    return videos.resources;
  } catch (error) {
    console.error('Error fetching videos:', error);
  }
};