module.exports = {
  compiler: {
    styledComponents: true,
  },
  async headers() {
    return [
      {
        source: "/checkout",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
};
