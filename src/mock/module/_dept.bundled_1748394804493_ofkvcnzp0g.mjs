// src/mock/module/dept.ts
var dept_default = [
  {
    url: "/admin-api/system/dept/list",
    type: "get",
    response: {
      code: 0,
      data: [
        {
          id: 100,
          name: "\u828B\u9053\u6E90\u7801",
          parentId: 0,
          sort: 0,
          leaderUserId: 1,
          phone: "15888888888",
          email: "ry@qq.com",
          status: 0,
          createTime: 1609837427e3
        },
        {
          id: 101,
          name: "\u6DF1\u5733\u603B\u516C\u53F8",
          parentId: 100,
          sort: 1,
          leaderUserId: 104,
          phone: "15888888888",
          email: "ry@qq.com",
          status: 0,
          createTime: 1609837427e3
        },
        {
          id: 103,
          name: "\u7814\u53D1\u90E8\u95E8",
          parentId: 101,
          sort: 1,
          leaderUserId: 1,
          phone: "15888888888",
          email: "ry@qq.com",
          status: 0,
          createTime: 1609837427e3
        },
        {
          id: 108,
          name: "\u5E02\u573A\u90E8\u95E8",
          parentId: 102,
          sort: 1,
          leaderUserId: null,
          phone: "15888888888",
          email: "ry@qq.com",
          status: 0,
          createTime: 1609837427e3
        },
        {
          id: 102,
          name: "\u957F\u6C99\u5206\u516C\u53F8",
          parentId: 100,
          sort: 2,
          leaderUserId: null,
          phone: "15888888888",
          email: "ry@qq.com",
          status: 0,
          createTime: 1609837427e3
        },
        {
          id: 104,
          name: "\u5E02\u573A\u90E8\u95E8",
          parentId: 101,
          sort: 2,
          leaderUserId: null,
          phone: "15888888888",
          email: "ry@qq.com",
          status: 0,
          createTime: 1609837427e3
        },
        {
          id: 109,
          name: "\u8D22\u52A1\u90E8\u95E8",
          parentId: 102,
          sort: 2,
          leaderUserId: null,
          phone: "15888888888",
          email: "ry@qq.com",
          status: 0,
          createTime: 1609837427e3
        },
        {
          id: 105,
          name: "\u6D4B\u8BD5\u90E8\u95E8",
          parentId: 101,
          sort: 3,
          leaderUserId: null,
          phone: "15888888888",
          email: "ry@qq.com",
          status: 0,
          createTime: 1609837427e3
        },
        {
          id: 113,
          name: "\u652F\u6301\u90E8\u95E8",
          parentId: 102,
          sort: 3,
          leaderUserId: 104,
          phone: null,
          email: null,
          status: 1,
          createTime: 1701481658e3
        },
        {
          id: 106,
          name: "\u8D22\u52A1\u90E8\u95E8",
          parentId: 101,
          sort: 4,
          leaderUserId: 103,
          phone: "15888888888",
          email: "ry@qq.com",
          status: 0,
          createTime: 1609837427e3
        },
        {
          id: 107,
          name: "\u8FD0\u7EF4\u90E8\u95E8",
          parentId: 101,
          sort: 5,
          leaderUserId: 1,
          phone: "15888888888",
          email: "ry@qq.com",
          status: 0,
          createTime: 1609837427e3
        },
        {
          id: 112,
          name: "\u4EA7\u54C1\u90E8\u95E8",
          parentId: 101,
          sort: 100,
          leaderUserId: 1,
          phone: null,
          email: null,
          status: 1,
          createTime: 1701481513e3
        }
      ],
      msg: ""
    }
  },
  {
    url: "/admin-api/system/dept/simple-list",
    type: "get",
    response: {
      code: 0,
      data: [
        {
          id: 100,
          name: "\u828B\u9053\u6E90\u7801",
          parentId: 0
        },
        {
          id: 101,
          name: "\u6DF1\u5733\u603B\u516C\u53F8",
          parentId: 100
        },
        {
          id: 103,
          name: "\u7814\u53D1\u90E8\u95E8",
          parentId: 101
        },
        {
          id: 108,
          name: "\u5E02\u573A\u90E8\u95E8",
          parentId: 102
        },
        {
          id: 102,
          name: "\u957F\u6C99\u5206\u516C\u53F8",
          parentId: 100
        },
        {
          id: 104,
          name: "\u5E02\u573A\u90E8\u95E8",
          parentId: 101
        },
        {
          id: 109,
          name: "\u8D22\u52A1\u90E8\u95E8",
          parentId: 102
        },
        {
          id: 105,
          name: "\u6D4B\u8BD5\u90E8\u95E8",
          parentId: 101
        },
        {
          id: 106,
          name: "\u8D22\u52A1\u90E8\u95E8",
          parentId: 101
        },
        {
          id: 107,
          name: "\u8FD0\u7EF4\u90E8\u95E8",
          parentId: 101
        }
      ],
      msg: ""
    }
  }
];
export {
  dept_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21vY2svbW9kdWxlL2RlcHQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiQzpcXFxcVXNlcnNcXFxcYWRtaW5cXFxcVGlhbkNoZW5nV2VpWWVcXFxcY29kZVxcXFx5dWRhb1xcXFxzcmNcXFxcbW9ja1xcXFxtb2R1bGVcXFxcZGVwdC50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCJDOlxcXFxVc2Vyc1xcXFxhZG1pblxcXFxUaWFuQ2hlbmdXZWlZZVxcXFxjb2RlXFxcXHl1ZGFvXFxcXHNyY1xcXFxtb2NrXFxcXG1vZHVsZVwiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vQzovVXNlcnMvYWRtaW4vVGlhbkNoZW5nV2VpWWUvY29kZS95dWRhby9zcmMvbW9jay9tb2R1bGUvZGVwdC50c1wiO2V4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIHVybDogJy9hZG1pbi1hcGkvc3lzdGVtL2RlcHQvbGlzdCcsXG4gICAgdHlwZTogJ2dldCcsXG4gICAgcmVzcG9uc2U6IHtcbiAgICAgIGNvZGU6IDAsXG4gICAgICBkYXRhOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMTAwLFxuICAgICAgICAgIG5hbWU6ICdcdTgyOEJcdTkwNTNcdTZFOTBcdTc4MDEnLFxuICAgICAgICAgIHBhcmVudElkOiAwLFxuICAgICAgICAgIHNvcnQ6IDAsXG4gICAgICAgICAgbGVhZGVyVXNlcklkOiAxLFxuICAgICAgICAgIHBob25lOiAnMTU4ODg4ODg4ODgnLFxuICAgICAgICAgIGVtYWlsOiAncnlAcXEuY29tJyxcbiAgICAgICAgICBzdGF0dXM6IDAsXG4gICAgICAgICAgY3JlYXRlVGltZTogMTYwOTgzNzQyNzAwMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEwMSxcbiAgICAgICAgICBuYW1lOiAnXHU2REYxXHU1NzMzXHU2MDNCXHU1MTZDXHU1M0Y4JyxcbiAgICAgICAgICBwYXJlbnRJZDogMTAwLFxuICAgICAgICAgIHNvcnQ6IDEsXG4gICAgICAgICAgbGVhZGVyVXNlcklkOiAxMDQsXG4gICAgICAgICAgcGhvbmU6ICcxNTg4ODg4ODg4OCcsXG4gICAgICAgICAgZW1haWw6ICdyeUBxcS5jb20nLFxuICAgICAgICAgIHN0YXR1czogMCxcbiAgICAgICAgICBjcmVhdGVUaW1lOiAxNjA5ODM3NDI3MDAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMTAzLFxuICAgICAgICAgIG5hbWU6ICdcdTc4MTRcdTUzRDFcdTkwRThcdTk1RTgnLFxuICAgICAgICAgIHBhcmVudElkOiAxMDEsXG4gICAgICAgICAgc29ydDogMSxcbiAgICAgICAgICBsZWFkZXJVc2VySWQ6IDEsXG4gICAgICAgICAgcGhvbmU6ICcxNTg4ODg4ODg4OCcsXG4gICAgICAgICAgZW1haWw6ICdyeUBxcS5jb20nLFxuICAgICAgICAgIHN0YXR1czogMCxcbiAgICAgICAgICBjcmVhdGVUaW1lOiAxNjA5ODM3NDI3MDAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMTA4LFxuICAgICAgICAgIG5hbWU6ICdcdTVFMDJcdTU3M0FcdTkwRThcdTk1RTgnLFxuICAgICAgICAgIHBhcmVudElkOiAxMDIsXG4gICAgICAgICAgc29ydDogMSxcbiAgICAgICAgICBsZWFkZXJVc2VySWQ6IG51bGwsXG4gICAgICAgICAgcGhvbmU6ICcxNTg4ODg4ODg4OCcsXG4gICAgICAgICAgZW1haWw6ICdyeUBxcS5jb20nLFxuICAgICAgICAgIHN0YXR1czogMCxcbiAgICAgICAgICBjcmVhdGVUaW1lOiAxNjA5ODM3NDI3MDAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMTAyLFxuICAgICAgICAgIG5hbWU6ICdcdTk1N0ZcdTZDOTlcdTUyMDZcdTUxNkNcdTUzRjgnLFxuICAgICAgICAgIHBhcmVudElkOiAxMDAsXG4gICAgICAgICAgc29ydDogMixcbiAgICAgICAgICBsZWFkZXJVc2VySWQ6IG51bGwsXG4gICAgICAgICAgcGhvbmU6ICcxNTg4ODg4ODg4OCcsXG4gICAgICAgICAgZW1haWw6ICdyeUBxcS5jb20nLFxuICAgICAgICAgIHN0YXR1czogMCxcbiAgICAgICAgICBjcmVhdGVUaW1lOiAxNjA5ODM3NDI3MDAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMTA0LFxuICAgICAgICAgIG5hbWU6ICdcdTVFMDJcdTU3M0FcdTkwRThcdTk1RTgnLFxuICAgICAgICAgIHBhcmVudElkOiAxMDEsXG4gICAgICAgICAgc29ydDogMixcbiAgICAgICAgICBsZWFkZXJVc2VySWQ6IG51bGwsXG4gICAgICAgICAgcGhvbmU6ICcxNTg4ODg4ODg4OCcsXG4gICAgICAgICAgZW1haWw6ICdyeUBxcS5jb20nLFxuICAgICAgICAgIHN0YXR1czogMCxcbiAgICAgICAgICBjcmVhdGVUaW1lOiAxNjA5ODM3NDI3MDAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMTA5LFxuICAgICAgICAgIG5hbWU6ICdcdThEMjJcdTUyQTFcdTkwRThcdTk1RTgnLFxuICAgICAgICAgIHBhcmVudElkOiAxMDIsXG4gICAgICAgICAgc29ydDogMixcbiAgICAgICAgICBsZWFkZXJVc2VySWQ6IG51bGwsXG4gICAgICAgICAgcGhvbmU6ICcxNTg4ODg4ODg4OCcsXG4gICAgICAgICAgZW1haWw6ICdyeUBxcS5jb20nLFxuICAgICAgICAgIHN0YXR1czogMCxcbiAgICAgICAgICBjcmVhdGVUaW1lOiAxNjA5ODM3NDI3MDAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMTA1LFxuICAgICAgICAgIG5hbWU6ICdcdTZENEJcdThCRDVcdTkwRThcdTk1RTgnLFxuICAgICAgICAgIHBhcmVudElkOiAxMDEsXG4gICAgICAgICAgc29ydDogMyxcbiAgICAgICAgICBsZWFkZXJVc2VySWQ6IG51bGwsXG4gICAgICAgICAgcGhvbmU6ICcxNTg4ODg4ODg4OCcsXG4gICAgICAgICAgZW1haWw6ICdyeUBxcS5jb20nLFxuICAgICAgICAgIHN0YXR1czogMCxcbiAgICAgICAgICBjcmVhdGVUaW1lOiAxNjA5ODM3NDI3MDAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMTEzLFxuICAgICAgICAgIG5hbWU6ICdcdTY1MkZcdTYzMDFcdTkwRThcdTk1RTgnLFxuICAgICAgICAgIHBhcmVudElkOiAxMDIsXG4gICAgICAgICAgc29ydDogMyxcbiAgICAgICAgICBsZWFkZXJVc2VySWQ6IDEwNCxcbiAgICAgICAgICBwaG9uZTogbnVsbCxcbiAgICAgICAgICBlbWFpbDogbnVsbCxcbiAgICAgICAgICBzdGF0dXM6IDEsXG4gICAgICAgICAgY3JlYXRlVGltZTogMTcwMTQ4MTY1ODAwMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEwNixcbiAgICAgICAgICBuYW1lOiAnXHU4RDIyXHU1MkExXHU5MEU4XHU5NUU4JyxcbiAgICAgICAgICBwYXJlbnRJZDogMTAxLFxuICAgICAgICAgIHNvcnQ6IDQsXG4gICAgICAgICAgbGVhZGVyVXNlcklkOiAxMDMsXG4gICAgICAgICAgcGhvbmU6ICcxNTg4ODg4ODg4OCcsXG4gICAgICAgICAgZW1haWw6ICdyeUBxcS5jb20nLFxuICAgICAgICAgIHN0YXR1czogMCxcbiAgICAgICAgICBjcmVhdGVUaW1lOiAxNjA5ODM3NDI3MDAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMTA3LFxuICAgICAgICAgIG5hbWU6ICdcdThGRDBcdTdFRjRcdTkwRThcdTk1RTgnLFxuICAgICAgICAgIHBhcmVudElkOiAxMDEsXG4gICAgICAgICAgc29ydDogNSxcbiAgICAgICAgICBsZWFkZXJVc2VySWQ6IDEsXG4gICAgICAgICAgcGhvbmU6ICcxNTg4ODg4ODg4OCcsXG4gICAgICAgICAgZW1haWw6ICdyeUBxcS5jb20nLFxuICAgICAgICAgIHN0YXR1czogMCxcbiAgICAgICAgICBjcmVhdGVUaW1lOiAxNjA5ODM3NDI3MDAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMTEyLFxuICAgICAgICAgIG5hbWU6ICdcdTRFQTdcdTU0QzFcdTkwRThcdTk1RTgnLFxuICAgICAgICAgIHBhcmVudElkOiAxMDEsXG4gICAgICAgICAgc29ydDogMTAwLFxuICAgICAgICAgIGxlYWRlclVzZXJJZDogMSxcbiAgICAgICAgICBwaG9uZTogbnVsbCxcbiAgICAgICAgICBlbWFpbDogbnVsbCxcbiAgICAgICAgICBzdGF0dXM6IDEsXG4gICAgICAgICAgY3JlYXRlVGltZTogMTcwMTQ4MTUxMzAwMFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgbXNnOiAnJ1xuICAgIH1cbiAgfSxcbiAge1xuICAgIHVybDogJy9hZG1pbi1hcGkvc3lzdGVtL2RlcHQvc2ltcGxlLWxpc3QnLFxuICAgIHR5cGU6ICdnZXQnLFxuICAgIHJlc3BvbnNlOiB7XG4gICAgICBjb2RlOiAwLFxuICAgICAgZGF0YTogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEwMCxcbiAgICAgICAgICBuYW1lOiAnXHU4MjhCXHU5MDUzXHU2RTkwXHU3ODAxJyxcbiAgICAgICAgICBwYXJlbnRJZDogMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEwMSxcbiAgICAgICAgICBuYW1lOiAnXHU2REYxXHU1NzMzXHU2MDNCXHU1MTZDXHU1M0Y4JyxcbiAgICAgICAgICBwYXJlbnRJZDogMTAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMTAzLFxuICAgICAgICAgIG5hbWU6ICdcdTc4MTRcdTUzRDFcdTkwRThcdTk1RTgnLFxuICAgICAgICAgIHBhcmVudElkOiAxMDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxMDgsXG4gICAgICAgICAgbmFtZTogJ1x1NUUwMlx1NTczQVx1OTBFOFx1OTVFOCcsXG4gICAgICAgICAgcGFyZW50SWQ6IDEwMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEwMixcbiAgICAgICAgICBuYW1lOiAnXHU5NTdGXHU2Qzk5XHU1MjA2XHU1MTZDXHU1M0Y4JyxcbiAgICAgICAgICBwYXJlbnRJZDogMTAwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMTA0LFxuICAgICAgICAgIG5hbWU6ICdcdTVFMDJcdTU3M0FcdTkwRThcdTk1RTgnLFxuICAgICAgICAgIHBhcmVudElkOiAxMDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxMDksXG4gICAgICAgICAgbmFtZTogJ1x1OEQyMlx1NTJBMVx1OTBFOFx1OTVFOCcsXG4gICAgICAgICAgcGFyZW50SWQ6IDEwMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEwNSxcbiAgICAgICAgICBuYW1lOiAnXHU2RDRCXHU4QkQ1XHU5MEU4XHU5NUU4JyxcbiAgICAgICAgICBwYXJlbnRJZDogMTAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMTA2LFxuICAgICAgICAgIG5hbWU6ICdcdThEMjJcdTUyQTFcdTkwRThcdTk1RTgnLFxuICAgICAgICAgIHBhcmVudElkOiAxMDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxMDcsXG4gICAgICAgICAgbmFtZTogJ1x1OEZEMFx1N0VGNFx1OTBFOFx1OTVFOCcsXG4gICAgICAgICAgcGFyZW50SWQ6IDEwMVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgbXNnOiAnJ1xuICAgIH1cbiAgfSxcbl0iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBULElBQU8sZUFBUTtBQUFBLEVBQ3ZVO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxNQUFNO0FB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
