module.exports = function (api) {
  api.cache(true);

  const presets = ['next/babel'];
  const plugins = [
    // [
    //   'styled-components',
    //   {
    //     ssr: true,
    //   },
    // ],
    'inline-react-svg',
  ];

  return {
    presets,
    plugins,
  };
};
// {
//   "presets": [ "next/babel" ],
//   "plugins": [ "inline-react-svg" ]
// }
