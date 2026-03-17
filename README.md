# YouTube Focus

YouTube Focus is a lightweight Chrome extension designed to reduce distractions on YouTube by giving you control over what appears on the homepage.

It allows you to remove Shorts entirely and optionally filter the homepage to display only videos from channels you are subscribed to.

## Features

- Hide all Shorts content across YouTube
- Toggle to filter homepage content to subscriptions only
- Preserve default YouTube behavior when filtering is disabled
- Works dynamically with YouTube’s interface updates using DOM observation

## How It Works

The extension operates as a content script that modifies the YouTube interface in real time.

- Shorts are removed using targeted DOM selectors
- Subscription filtering is achieved by:
  - Reading subscribed channel names from the sidebar
  - Matching them against homepage video entries
  - Hiding non-matching videos when the toggle is enabled

No external APIs or data collection is involved.

## Installation

### Load Unpacked Extension

1. Clone or download this repository
2. Open Chrome and navigate to:
   chrome://extensions/
3. Enable Developer Mode
4. Click "Load unpacked"
5. Select the project folder

## Usage

1. Open YouTube
2. Click the extension icon in the toolbar
3. Enable or disable "Subscriptions Only"
4. Refresh the homepage to apply changes

## Project Structure

youtube-focus/
|
├── manifest.json
|
├── content.js
|
├── popup.html
|
└── popup.js

## Limitations

- Filtering is based on channel name matching and may not be perfectly accurate in all cases
- YouTube frequently updates its DOM structure, which may require selector updates
- Some elements may briefly appear before being removed due to dynamic loading

## Future Improvements

- More robust channel identification using links instead of names
- Optional blocking of recommendations on video pages
- Configurable settings for different distraction levels
- Time-based filtering modes

## License

This project is provided for personal use and experimentation. Add a license here if you plan to distribute it.
