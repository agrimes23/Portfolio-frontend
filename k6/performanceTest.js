import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10, // Virtual Users
  duration: '30s', // Test duration
};

export default function () {
  // Replace 'http://your-app-url' with the actual URL of your React app
  let res = http.get('http://localhost:3001/api/videos');
  check(res, { 'status is 200': (r) => r.status === 200 });

  // Simulate user behavior - you might need to adjust this based on your actual usage patterns
  sleep(1);
}