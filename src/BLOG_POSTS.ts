export interface BlogPostData {
  id: string;
  title: string;
  summary: string;
  content: string[];
  date: string; // dd/mm/yyyy
  category: "Testing" | "Frontend" | "Backend" | "DevOps";
}

export const BLOG_POSTS: BlogPostData[] = [
  {
    id: "1",
    title: "Why I Write Tests Before I Write Code: A QA Engineer's Perspective",
    summary:
      "Moving from full-time QA into Full-Stack engineering taught me that a test-driven mindset isn't slower—it's your ultimate deployment superpower.",
    content: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur tincidunt dignissim nunc in pulvinar. 
      Etiam eu augue dapibus, faucibus mauris pharetra, venenatis velit. Praesent congue non sapien vel bibendum. 
      Vivamus elementum magna est, sit amet tincidunt mi sagittis id. Quisque tortor tellus, consequat ac tortor at, 
      commodo ultrices odio. Etiam non pharetra nibh, et auctor neque. Aenean mauris lorem, dapibus et eleifend a, 
      pharetra at elit. Cras eleifend felis nulla, sit amet fringilla velit tincidunt sit amet. Pellentesque feugiat 
      lectus sed risus volutpat, ac porttitor ligula egestas. Cras urna risus, maximus at pretium nec, tempus a ante. 
      Donec in dictum neque. Duis ut nisi et ex congue imperdiet. Nam sed auctor elit. Aenean vel commodo eros, ac dapibus erat. 
      Etiam tristique dictum accumsan.`,
      `Vestibulum quis vestibulum mi. Nunc aliquet, justo pretium auctor fermentum, erat lacus tincidunt ligula, sed maximus 
      lectus odio et metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit risus dictum, malesuada 
      enim et, ultrices risus. Quisque eu placerat mi, facilisis pretium ligula. Vivamus tristique neque a metus rhoncus, 
      non sollicitudin purus mattis. Donec ut nibh dapibus, commodo velit ac, consequat risus. Donec non augue semper, 
      molestie velit id, eleifend justo. Etiam dictum est leo, quis rhoncus justo porta vitae. Suspendisse eu vestibulum ex.`,
    ],
    date: "12/05/2026",
    category: "Testing",
  },
  {
    id: "2",
    title: "Mastering React Component Communication with TypeScript",
    summary:
      "Stop using 'any' for event handlers and complex layout states. A clean guide to typing props, children, and component pipelines beautifully.",
    content: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur tincidunt dignissim nunc in pulvinar. 
      Etiam eu augue dapibus, faucibus mauris pharetra, venenatis velit. Praesent congue non sapien vel bibendum. 
      Vivamus elementum magna est, sit amet tincidunt mi sagittis id. Quisque tortor tellus, consequat ac tortor at, 
      commodo ultrices odio. Etiam non pharetra nibh, et auctor neque. Aenean mauris lorem, dapibus et eleifend a, 
      pharetra at elit. Cras eleifend felis nulla, sit amet fringilla velit tincidunt sit amet. Pellentesque feugiat 
      lectus sed risus volutpat, ac porttitor ligula egestas. Cras urna risus, maximus at pretium nec, tempus a ante. 
      Donec in dictum neque. Duis ut nisi et ex congue imperdiet. Nam sed auctor elit. Aenean vel commodo eros, ac dapibus erat. 
      Etiam tristique dictum accumsan.`,
      `Vestibulum quis vestibulum mi. Nunc aliquet, justo pretium auctor fermentum, erat lacus tincidunt ligula, sed maximus 
      lectus odio et metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit risus dictum, malesuada 
      enim et, ultrices risus. Quisque eu placerat mi, facilisis pretium ligula. Vivamus tristique neque a metus rhoncus, 
      non sollicitudin purus mattis. Donec ut nibh dapibus, commodo velit ac, consequat risus. Donec non augue semper, 
      molestie velit id, eleifend justo. Etiam dictum est leo, quis rhoncus justo porta vitae. Suspendisse eu vestibulum ex.`,
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur tincidunt dignissim nunc in pulvinar. 
      Etiam eu augue dapibus, faucibus mauris pharetra, venenatis velit. Praesent congue non sapien vel bibendum. 
      Vivamus elementum magna est, sit amet tincidunt mi sagittis id. Quisque tortor tellus, consequat ac tortor at, 
      commodo ultrices odio. Etiam non pharetra nibh, et auctor neque. Aenean mauris lorem, dapibus et eleifend a, 
      pharetra at elit. Cras eleifend felis nulla, sit amet fringilla velit tincidunt sit amet. Pellentesque feugiat 
      lectus sed risus volutpat, ac porttitor ligula egestas. Cras urna risus, maximus at pretium nec, tempus a ante. 
      Donec in dictum neque. Duis ut nisi et ex congue imperdiet. Nam sed auctor elit. Aenean vel commodo eros, ac dapibus erat. 
      Etiam tristique dictum accumsan.`,
      `Vestibulum quis vestibulum mi. Nunc aliquet, justo pretium auctor fermentum, erat lacus tincidunt ligula, sed maximus 
      lectus odio et metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit risus dictum, malesuada 
      enim et, ultrices risus. Quisque eu placerat mi, facilisis pretium ligula. Vivamus tristique neque a metus rhoncus, 
      non sollicitudin purus mattis. Donec ut nibh dapibus, commodo velit ac, consequat risus. Donec non augue semper, 
      molestie velit id, eleifend justo. Etiam dictum est leo, quis rhoncus justo porta vitae. Suspendisse eu vestibulum ex.`,
    ],
    date: "12/05/2026",
    category: "Frontend",
  },
  {
    id: "3",
    title: "Containerizing Legacy PHP Apps with Docker and Apache",
    summary:
      "A practical blueprint for wrapping traditional server architectures inside robust modern container lifecycles without losing configuration details.",
    content: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur tincidunt dignissim nunc in pulvinar. 
      Etiam eu augue dapibus, faucibus mauris pharetra, venenatis velit. Praesent congue non sapien vel bibendum. 
      Vivamus elementum magna est, sit amet tincidunt mi sagittis id. Quisque tortor tellus, consequat ac tortor at, 
      commodo ultrices odio. Etiam non pharetra nibh, et auctor neque. Aenean mauris lorem, dapibus et eleifend a, 
      pharetra at elit. Cras eleifend felis nulla, sit amet fringilla velit tincidunt sit amet. Pellentesque feugiat 
      lectus sed risus volutpat, ac porttitor ligula egestas. Cras urna risus, maximus at pretium nec, tempus a ante. 
      Donec in dictum neque. Duis ut nisi et ex congue imperdiet. Nam sed auctor elit. Aenean vel commodo eros, ac dapibus erat. 
      Etiam tristique dictum accumsan.`,
    ],
    date: "12/05/2026",
    category: "DevOps",
  },
  {
    id: "4",
    title: "Designing Predictable Relational Databases with MySQL",
    summary:
      "How to avoid common pitfalls in relational database indexing and normalization schemas to build backends capable of scaling cleanly.",
    content: [],
    date: "12/05/2026",
    category: "Backend",
  },
];
