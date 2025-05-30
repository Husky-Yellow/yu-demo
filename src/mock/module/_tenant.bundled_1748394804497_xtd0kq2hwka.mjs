// src/mock/module/tenant.ts
var tenant_default = [
  // user login
  {
    url: "/admin-api/system/tenant/simple-list",
    type: "get",
    response: {
      code: 0,
      data: [
        {
          id: 1,
          name: "\u828B\u9053\u6E90\u7801",
          contactName: null,
          contactMobile: null,
          status: null,
          website: null,
          packageId: null,
          expireTime: null,
          accountCount: null,
          createTime: null
        },
        {
          id: 121,
          name: "\u5C0F\u79DF\u6237",
          contactName: null,
          contactMobile: null,
          status: null,
          website: null,
          packageId: null,
          expireTime: null,
          accountCount: null,
          createTime: null
        },
        {
          id: 122,
          name: "\u6D4B\u8BD5\u79DF\u6237",
          contactName: null,
          contactMobile: null,
          status: null,
          website: null,
          packageId: null,
          expireTime: null,
          accountCount: null,
          createTime: null
        }
      ],
      msg: ""
    }
  },
  {
    url: "/admin-api/system/tenant/get-id-by-name",
    type: "get",
    response: {
      code: 0,
      data: 1,
      msg: ""
    }
  }
];
export {
  tenant_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21vY2svbW9kdWxlL3RlbmFudC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCJDOlxcXFxVc2Vyc1xcXFxhZG1pblxcXFxUaWFuQ2hlbmdXZWlZZVxcXFxjb2RlXFxcXHl1ZGFvXFxcXHNyY1xcXFxtb2NrXFxcXG1vZHVsZVxcXFx0ZW5hbnQudHNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiQzpcXFxcVXNlcnNcXFxcYWRtaW5cXFxcVGlhbkNoZW5nV2VpWWVcXFxcY29kZVxcXFx5dWRhb1xcXFxzcmNcXFxcbW9ja1xcXFxtb2R1bGVcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL0M6L1VzZXJzL2FkbWluL1RpYW5DaGVuZ1dlaVllL2NvZGUveXVkYW8vc3JjL21vY2svbW9kdWxlL3RlbmFudC50c1wiO2V4cG9ydCBkZWZhdWx0IFtcbiAgLy8gdXNlciBsb2dpblxuXG5cbiAgXG5cblxuICB7XG4gICAgdXJsOiAnL2FkbWluLWFwaS9zeXN0ZW0vdGVuYW50L3NpbXBsZS1saXN0JyxcbiAgICB0eXBlOiAnZ2V0JyxcbiAgICByZXNwb25zZToge1xuICAgICAgY29kZTogMCxcbiAgICAgIGRhdGE6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIG5hbWU6ICdcdTgyOEJcdTkwNTNcdTZFOTBcdTc4MDEnLFxuICAgICAgICAgIGNvbnRhY3ROYW1lOiBudWxsLFxuICAgICAgICAgIGNvbnRhY3RNb2JpbGU6IG51bGwsXG4gICAgICAgICAgc3RhdHVzOiBudWxsLFxuICAgICAgICAgIHdlYnNpdGU6IG51bGwsXG4gICAgICAgICAgcGFja2FnZUlkOiBudWxsLFxuICAgICAgICAgIGV4cGlyZVRpbWU6IG51bGwsXG4gICAgICAgICAgYWNjb3VudENvdW50OiBudWxsLFxuICAgICAgICAgIGNyZWF0ZVRpbWU6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxMjEsXG4gICAgICAgICAgbmFtZTogJ1x1NUMwRlx1NzlERlx1NjIzNycsXG4gICAgICAgICAgY29udGFjdE5hbWU6IG51bGwsXG4gICAgICAgICAgY29udGFjdE1vYmlsZTogbnVsbCxcbiAgICAgICAgICBzdGF0dXM6IG51bGwsXG4gICAgICAgICAgd2Vic2l0ZTogbnVsbCxcbiAgICAgICAgICBwYWNrYWdlSWQ6IG51bGwsXG4gICAgICAgICAgZXhwaXJlVGltZTogbnVsbCxcbiAgICAgICAgICBhY2NvdW50Q291bnQ6IG51bGwsXG4gICAgICAgICAgY3JlYXRlVGltZTogbnVsbFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEyMixcbiAgICAgICAgICBuYW1lOiAnXHU2RDRCXHU4QkQ1XHU3OURGXHU2MjM3JyxcbiAgICAgICAgICBjb250YWN0TmFtZTogbnVsbCxcbiAgICAgICAgICBjb250YWN0TW9iaWxlOiBudWxsLFxuICAgICAgICAgIHN0YXR1czogbnVsbCxcbiAgICAgICAgICB3ZWJzaXRlOiBudWxsLFxuICAgICAgICAgIHBhY2thZ2VJZDogbnVsbCxcbiAgICAgICAgICBleHBpcmVUaW1lOiBudWxsLFxuICAgICAgICAgIGFjY291bnRDb3VudDogbnVsbCxcbiAgICAgICAgICBjcmVhdGVUaW1lOiBudWxsXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBtc2c6ICcnXG4gICAgfVxuICB9LFxuXG5cblxuICB7XG4gICAgdXJsOiAnL2FkbWluLWFwaS9zeXN0ZW0vdGVuYW50L2dldC1pZC1ieS1uYW1lJyxcbiAgICB0eXBlOiAnZ2V0JyxcbiAgICByZXNwb25zZToge1xuICAgICAgY29kZTogMCxcbiAgICAgIGRhdGE6IDEsXG4gICAgICBtc2c6ICcnXG4gICAgfVxuICB9LFxuIFxuXG5dXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThULElBQU8saUJBQVE7QUFBQTtBQUFBLEVBTzNVO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsUUFDSjtBQUFBLFVBQ0UsSUFBSTtBQUFBLFVBQ0osTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsZUFBZTtBQUFBLFVBQ2YsUUFBUTtBQUFBLFVBQ1IsU0FBUztBQUFBLFVBQ1QsV0FBVztBQUFBLFVBQ1gsWUFBWTtBQUFBLFVBQ1osY0FBYztBQUFBLFVBQ2QsWUFBWTtBQUFBLFFBQ2Q7QUFBQSxRQUNBO0FBQUEsVUFDRSxJQUFJO0FBQUEsVUFDSixNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixlQUFlO0FBQUEsVUFDZixRQUFRO0FBQUEsVUFDUixTQUFTO0FBQUEsVUFDVCxXQUFXO0FBQUEsVUFDWCxZQUFZO0FBQUEsVUFDWixjQUFjO0FBQUEsVUFDZCxZQUFZO0FBQUEsUUFDZDtBQUFBLFFBQ0E7QUFBQSxVQUNFLElBQUk7QUFBQSxVQUNKLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLGVBQWU7QUFBQSxVQUNmLFFBQVE7QUFBQSxVQUNSLFNBQVM7QUFBQSxVQUNULFdBQVc7QUFBQSxVQUNYLFlBQVk7QUFBQSxVQUNaLGNBQWM7QUFBQSxVQUNkLFlBQVk7QUFBQSxRQUNkO0FBQUEsTUFDRjtBQUFBLE1BQ0EsS0FBSztBQUFBLElBQ1A7QUFBQSxFQUNGO0FBQUEsRUFJQTtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLElBQ1A7QUFBQSxFQUNGO0FBR0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
