import axios from 'axios';
import XMLParser from 'fast-xml-parser';

const parser = new XMLParser.XMLParser();

export const getJobs = async (url) => {
  //  await keepAuthenticated();
  let filtered = [];

  // const url = keywords[i].rss;
  // const url =
  //   'https://www.upwork.com/ab/feed/topics/rss?securityToken=a1cffed403e9bca2ec42655707a6fa273aa337e1dc98bc0487df198ec8dc614486fc75097cd45f292335ec9997f3436fc373b3bb688745f09899a3e4985058d1&userUid=1261666235980595200&orgUid=1261666235993178113&topic=best-matches';
  await axios
    .get(url, { headers: { 'X-Requested-With': 'XMLHttpRequest' } })
    .then((response) => {
      const original = response.data;
      let xmlJobList = parser.parse(original);

      xmlJobList.rss.channel.item.map((item) => {
        filtered.push({
          title: item.title.replace(' - Upwork', ''),
          link: item.link,
          date: new Date(
            (item.description.match(/<b>Posted On<\/b>: ([^<]+)/) || [
              null,
              new Date().toUTCString(),
            ])[1]
          ),
          budget: (item.description.match(/<b>Budget<\/b>: ([^<]+)/) || [
            null,
            null,
          ])[1],
          hourly: (item.description.match(/<b>Hourly Range<\/b>: ([^<]+)/) || [
            null,
            null,
          ])[1],
          description: item.description
            .replace(/< b>Posted On<\/b>: [^<]+<br \/>/, '')
            .replace(/<b>Budget<\/b>: [^<]+<br \/>/, '')
            .replace(/<b>Hourly Range<\/b>: [^<]+<br \/>/, '')
            .replace(/<b>Hourly Range<\/b>: [^<]+<br \/>/, '')
            .replace(/<b>Skills<\/b>:([^<]+)/, '')
            .replace(/<b>Country<\/b>:([^<]+)/, '')
            .replace(/<b>Category<\/b>:([^<]+)/, '')
            .replace(/<b>posted on<\/b>:([^<]+)/i, '')
            .replace(/<a href="([^]+)/, '')
            .replace(/(<br \/>)+/g, '')
            .replace(/(&nbsp;)+/g, ''),
          // 'uid': item.guid,
          // 'keyword': keywords[i].keyword,
        });
      });
    })
    .catch((error) => [error.response, null]);
  return filtered;
};
export const getAllJobs = async (keywords = []) => {
  //  await keepAuthenticated();
  let filtered = [];

  for (let i = 0; i < keywords.length; i++) {
    const url = keywords[i].rss;
    await axios
      .get(url, { headers: { 'X-Requested-With': 'XMLHttpRequest' } })
      .then((response) => {
        const original = response.data;
        let xmlJobList = parser.parse(original);

        xmlJobList.rss.channel.item.map((item) => {
          filtered.push({
            title: item.title.replace(' - Upwork', ''),
            link: item.link,
            date: new Date(
              (item.description.match(/<b>Posted On<\/b>: ([^<]+)/) || [
                null,
                new Date().toUTCString(),
              ])[1]
            ),
            budget: (item.description.match(/<b>Budget<\/b>: ([^<]+)/) || [
              null,
              null,
            ])[1],
            hourly: (item.description.match(
              /<b>Hourly Range<\/b>: ([^<]+)/
            ) || [null, null])[1],
            description: item.description
              .replace(/< b>Posted On<\/b>: [^<]+<br \/>/, '')
              .replace(/<b>Budget<\/b>: [^<]+<br \/>/, '')
              .replace(/<b>Hourly Range<\/b>: [^<]+<br \/>/, '')
              .replace(/<b>Hourly Range<\/b>: [^<]+<br \/>/, '')
              .replace(/<b>Skills<\/b>:([^<]+)/, '')
              .replace(/<b>Country<\/b>:([^<]+)/, '')
              .replace(/<b>Category<\/b>:([^<]+)/, '')
              .replace(/<b>posted on<\/b>:([^<]+)/i, '')
              .replace(/<a href="([^]+)/, '')
              .replace(/(<br \/>)+/g, '')
              .replace(/(&nbsp;)+/g, ''),
            uid: item.guid,
            keyword: keywords[i].keyword,
            '__seen': false
            
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
    }
    return filtered;
};
