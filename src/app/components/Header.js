// components/Header.js
import { Typography } from '@mui/material';

const Header = () => {
  return (
    <div className="mb-4">
      <Typography variant="h4" component="div">Good morning, Joe!</Typography>
      <div className="flex space-x-4 mt-2">
        <div className="bg-gray-100 p-4 rounded-lg flex items-center space-x-2">
          <img src="/path/to/icon1.png" alt="Introducing tags" className="w-8 h-8" />
          <div>
            <Typography variant="h6">Introducing tags</Typography>
            <Typography variant="body2">Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.</Typography>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg flex items-center space-x-2">
          <img src="/path/to/icon2.png" alt="Share Notes Instantly" className="w-8 h-8" />
          <div>
            <Typography variant="h6">Share Notes Instantly</Typography>
            <Typography variant="body2">Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options.</Typography>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg flex items-center space-x-2">
          <img src="/path/to/icon3.png" alt="Access Anywhere" className="w-8 h-8" />
          <div>
            <Typography variant="h6">Access Anywhere</Typography>
            <Typography variant="body2">Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer.</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
