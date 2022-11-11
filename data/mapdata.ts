export default {
  nodes: [
    {
      id: "5e274797-4db7-4fe8-a983-8b8abf8771c5",
      text: "Root",
      fx: -11.0,
      fy: -650.0
    },
    {
      id: "4763495c-62b7-4625-9083-2d40045b6550",
      text: "Topic 1",
      fx: 154.3247731601375,
      fy: -429.73700786748157
    },
    {
      id: "02441b12-6ef7-4316-a560-9fff8166c50b",
      text: "Subtopic 1",
      fx: 455.7839253819375,
      fy: -183.5539283546699
    },
    {
      id: "ab3d94cc-59c9-43be-ac16-161d25538ba5",
      text: "Topic 2",
      fx: -98.5231997717085,
      fy: -60.07462866512333
    },
    {
      id: "e5f10dae-fe3b-484a-97bf-5aaf6656b3c3",
      text: "Subtopic 2",
    },
    {
      id: "1bca0f6d-cb21-470c-b5a9-40c88b7ced6b",
      text: "Subtopic 3"
    },
    {
      id: "6ea5b16c-8cf5-4bc3-8338-4837971c3493",
      text: "Subsubtopic 1"
    }
  ],
  connections: [
    {
      source: "5e274797-4db7-4fe8-a983-8b8abf8771c5",
      target: "ab3d94cc-59c9-43be-ac16-161d25538ba5"
    },
    {
      source: "4763495c-62b7-4625-9083-2d40045b6550",
      target: "5e274797-4db7-4fe8-a983-8b8abf8771c5"
    },
    {
      source: "ab3d94cc-59c9-43be-ac16-161d25538ba5",
      target: "1bca0f6d-cb21-470c-b5a9-40c88b7ced6b"
    },
    {
      source: "ab3d94cc-59c9-43be-ac16-161d25538ba5",
      target: "e5f10dae-fe3b-484a-97bf-5aaf6656b3c3"
    },
    {
      source: "e5f10dae-fe3b-484a-97bf-5aaf6656b3c3",
      target: "6ea5b16c-8cf5-4bc3-8338-4837971c3493"
    },
    {
      source: "02441b12-6ef7-4316-a560-9fff8166c50b",
      target: "4763495c-62b7-4625-9083-2d40045b6550"
    }
  ]
};
