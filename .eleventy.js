const util = require('util');

const sortObject = o => Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {})

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('_src/assets');
  eleventyConfig.addPassthroughCopy('_src/favicon.ico');
  eleventyConfig.addFilter("meetingLocations", meetings => {
    let locations = meetings.reduce((acc, curr) => {
      let location = curr.location;
      if(!acc.hasOwnProperty(location)) {
        acc[location] = 0;
      }
      acc[location]++;
      return acc;
    }, {});

    locations = sortObject(locations);
    
    console.log(locations);

    locations = Object.keys(locations).map(k => {
      return { name: k } 
    });

    locations.forEach(location => {
      meetings.forEach(meeting => {
        if (!location.hasOwnProperty('meetings')) {
          location.meetings = [];
        }
        if (location.name === meeting.location) {
          location.meetings.push(meeting);
        }
      });
    });
    
    return locations;
  });

  return {
    dir: {
      input: '_src'
    }
  }
}
